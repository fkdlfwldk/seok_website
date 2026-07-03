-- SEOK Marketing blog — Supabase schema
-- Run this in Supabase Dashboard -> SQL Editor (Project -> SQL Editor -> New query).
-- Safe to re-run: uses IF NOT EXISTS / DROP POLICY IF EXISTS guards.
--
-- Single-admin model: there is no profiles/role table. The only account
-- that will ever exist is the one admin, created directly in
-- Authentication -> Users -> Add user (with "Auto Confirm User" checked)
-- rather than through the app's public signup flow (this app has no
-- public signup page at all). So "authenticated" == "admin" here.

create extension if not exists pgcrypto; -- for gen_random_uuid()

create table if not exists public.posts (
  id           uuid primary key default gen_random_uuid(),
  slug         text not null unique,
  title        text not null,
  excerpt      text not null,
  content      text not null,
  thumbnail    text,
  status       text not null default 'draft' check (status in ('draft', 'published')),
  created_at   timestamptz not null default now(),
  updated_at   timestamptz not null default now(),
  published_at timestamptz
);

create index if not exists posts_public_feed_idx on public.posts (status, published_at desc);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists trg_posts_updated_at on public.posts;
create trigger trg_posts_updated_at
before update on public.posts
for each row execute function public.set_updated_at();

alter table public.posts enable row level security;

drop policy if exists "posts: public read published" on public.posts;
create policy "posts: public read published"
on public.posts for select
using (status = 'published');

drop policy if exists "posts: authenticated read all" on public.posts;
create policy "posts: authenticated read all"
on public.posts for select to authenticated
using (true);

drop policy if exists "posts: authenticated insert" on public.posts;
create policy "posts: authenticated insert"
on public.posts for insert to authenticated
with check (true);

drop policy if exists "posts: authenticated update" on public.posts;
create policy "posts: authenticated update"
on public.posts for update to authenticated
using (true) with check (true);

drop policy if exists "posts: authenticated delete" on public.posts;
create policy "posts: authenticated delete"
on public.posts for delete to authenticated
using (true);
