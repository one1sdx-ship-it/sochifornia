// Глобальный индикатор загрузки между маршрутами
export default function Loading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="h-10 w-10 animate-spin rounded-full border-2 border-hairline border-t-primary" />
        <p className="text-sm text-muted">Загружаем…</p>
      </div>
    </div>
  );
}
