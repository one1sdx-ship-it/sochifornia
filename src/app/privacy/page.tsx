import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Политика конфиденциальности",
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHeader title="Политика конфиденциальности" />
      <section className="container-content py-section-sm">
        <div className="mx-auto max-w-2xl space-y-4 text-body">
          <p>
            Это страница-заглушка. Полный текст политики обработки персональных данных будет
            размещён здесь. Документ опишет, какие данные мы собираем (имя, телефон), цели их
            обработки (обратный звонок и подтверждение заявки) и порядок их хранения.
          </p>
          <p>
            Оставляя заявку на сайте, пользователь соглашается на обработку указанных
            персональных данных в соответствии с действующим законодательством РФ.
          </p>
        </div>
      </section>
    </>
  );
}
