import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Договор-оферта",
  robots: { index: false, follow: true },
};

export default function OfferPage() {
  return (
    <>
      <PageHeader title="Договор-оферта" />
      <section className="container-content py-section-sm">
        <div className="mx-auto max-w-2xl space-y-4 text-body">
          <p>
            Это страница-заглушка. Здесь будет размещён публичный договор-оферта на оказание
            экскурсионных услуг: предмет договора, права и обязанности сторон, условия оплаты,
            порядок отмены и возврата.
          </p>
          <p>
            Полный текст документа предоставит компания после согласования юридических
            формулировок.
          </p>
        </div>
      </section>
    </>
  );
}
