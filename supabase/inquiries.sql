-- 문의 접수 테이블 (/contact 폼)
--
-- 방문자는 anon 키로 insert만 가능하고, 열람·상태변경은 로그인한 관리자만 가능하다.
-- 웹앱에 service_role 키를 넣지 않기 위해 insert를 RLS 정책으로 허용하는 구조.
--
-- ⚠️ 이 사이트의 Supabase 프로젝트(ref gddyyszdarkslvhowpyq)는 다른 구글 계정 소속이라
--    자동 적용이 불가능하다. 대시보드 → SQL Editor에 붙여넣고 직접 실행할 것 (재실행 안전).

create table if not exists public.inquiries (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),

  name text not null,
  email text not null,
  phone text,
  company text,

  contact_type text,
  -- 이 사이트 폼의 "문의 유형"(장기 블로그 운영 등)이 여기에 들어간다
  inquiry_type text,

  message text not null,

  privacy_agree boolean not null default false,
  marketing_agree boolean not null default false,

  source_page text,

  status text not null default 'new'
    check (status in ('new', 'read', 'replied', 'spam')),

  notified_at timestamptz,
  notify_error text
);

create index if not exists idx_inquiries_created_at on public.inquiries (created_at desc);
create index if not exists idx_inquiries_status on public.inquiries (status);

alter table public.inquiries enable row level security;

-- 방문자 제출 허용. 공개 폼이므로 anon에게 insert만 연다.
drop policy if exists "inquiries: public insert" on public.inquiries;
create policy "inquiries: public insert"
on public.inquiries for insert to anon, authenticated
with check (true);

-- 열람은 로그인 사용자(=관리자)만. anon은 select 정책이 없으므로 한 건도 못 읽는다.
drop policy if exists "inquiries: authenticated read" on public.inquiries;
create policy "inquiries: authenticated read"
on public.inquiries for select to authenticated
using (true);

drop policy if exists "inquiries: authenticated update" on public.inquiries;
create policy "inquiries: authenticated update"
on public.inquiries for update to authenticated
using (true) with check (true);

drop policy if exists "inquiries: authenticated delete" on public.inquiries;
create policy "inquiries: authenticated delete"
on public.inquiries for delete to authenticated
using (true);

-- 알림 메일 발송 결과 기록용.
-- 방문자(anon)는 UPDATE 정책이 없으므로 직접 갱신할 수 없다. 그렇다고 anon에게 UPDATE를
-- 열어주면 접수 내용까지 조작 가능해지므로, 알림 관련 두 컬럼만 건드리는 함수를 따로 둔다.
-- 이 함수로는 조회가 불가능하고 본문/연락처도 바꿀 수 없어 노출 위험이 없다.
create or replace function public.mark_inquiry_notified(p_id uuid, p_error text default null)
returns void
language sql
security definer
set search_path = public
as $$
  update public.inquiries
     set notified_at  = case when p_error is null then now() else notified_at end,
         notify_error = p_error
   where id = p_id;
$$;

grant execute on function public.mark_inquiry_notified(uuid, text) to anon, authenticated;
