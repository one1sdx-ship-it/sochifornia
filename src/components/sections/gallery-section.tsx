import { SectionHeading } from "@/components/section-heading";
import { GradientImage } from "@/components/gradient-image";
import { Reveal } from "@/components/reveal";

const shots = [
  { id: "grad-mountains-1", label: "Горные вершины Красной Поляны", span: "row-span-2" },
  { id: "grad-sea-2", label: "Закат на яхте" },
  { id: "grad-nature-1", label: "Водопады и реликтовый лес" },
  { id: "grad-city-1", label: "Олимпийский парк" },
  { id: "grad-nature-3", label: "Чайные плантации", span: "row-span-2" },
  { id: "grad-sea-1", label: "Морская прогулка" },
  { id: "grad-mountains-2", label: "Подвесные мосты" },
];

export function GallerySection() {
  return (
    <section className="bg-surface py-section-sm sm:py-section">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Галерея впечатлений"
          title="Так выглядит отдых с нами"
          subtitle="Живые кадры с наших маршрутов. Совсем скоро здесь появятся ваши."
          align="center"
        />
        <Reveal className="mt-12">
          <div className="grid auto-rows-[180px] grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {shots.map((s) => (
              <GradientImage
                key={s.id + s.label}
                id={s.id}
                label={s.label}
                className={`rounded-lg ${s.span ?? ""}`}
              >
                <div className="absolute inset-x-0 bottom-0 p-3">
                  <p className="text-sm font-medium text-white drop-shadow">{s.label}</p>
                </div>
              </GradientImage>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
