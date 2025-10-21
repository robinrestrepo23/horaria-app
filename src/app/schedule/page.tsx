import UploadForm from "./components/UploadForm";
import PreferencesForm from "./components/PreferencesForm";
import ScheduleTable from "./components/SheduleTable";

export default function HorarioPage() {
  return (
    <div className="space-y-10">
      <h2 className="text-2xl font-bold text-center text-blue-700">
        Genera tu horario académico
      </h2>

      <UploadForm />
      <PreferencesForm />
      <ScheduleTable />
    </div>
  );
}
