import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="container-content flex min-h-[70vh] flex-col items-center justify-center py-20 text-center">
      <p className="font-display text-7xl font-bold text-primary sm:text-9xl">404</p>
      <h1 className="mt-4 font-display text-2xl font-bold text-ink sm:text-3xl">
        Кажется, этот маршрут потерялся
      </h1>
      <p className="mt-3 max-w-md text-body">
        Страница не найдена. Возможно, она переехала или вы ошиблись адресом. Давайте вернёмся
        к проверенным маршрутам.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button href="/" size="lg">На главную</Button>
        <Button href="/tours" size="lg" variant="outline">В каталог экскурсий</Button>
      </div>
    </section>
  );
}
