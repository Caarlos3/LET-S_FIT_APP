import React from "react";

export default function Rutina() {
  const [routineName, setRoutineName] = React.useState("");
  const [exercises, setExercises] = React.useState([
    { id: generateId(), name: "", sets: "", reps: "", weight: "" },
  ]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const [success, setSuccess] = React.useState("");
  const [routines, setRoutines] = React.useState([]);
  const [mostrar, setMostrar] = React.useState(true);

  const API_BASE = process.env.REACT_APP_API_BASE || "http://localhost:5001";

  function generateId() {
    return Math.random().toString(36).slice(2) + Date.now().toString(36);
  }

  React.useEffect(() => {
    fetchRoutines();
  }, []);

  const fetchRoutines = async () => {
    try {
      const resp = await fetch(`${API_BASE}/routines`);
      const data = await resp.json();
      if (resp.ok) {
        setRoutines(Array.isArray(data) ? data : []);
      } else {
        setError(data?.err || "Error al cargar rutinas");
      }
    } catch (error) {
      console.error("Error fetching routines:", error);
      setError("Error de conexión al cargar rutinas");
    }
  };

  const addExercise = () => {
    setExercises((prev) => [
      ...prev,
      { id: generateId(), name: "", sets: "", reps: "", weight: "" },
    ]);
  };

  const removeExercise = (id) => {
    if (exercises.length > 1) {
      setExercises(exercises.filter((exercise) => exercise.id !== id));
    }
  };

  const updateExercise = (id, field, value) => {
    setExercises((prev) =>
      prev.map((ex) => (ex.id === id ? { ...ex, [field]: value } : ex))
    );
  };

  const resetForm = () => {
    setRoutineName("");
    setExercises([{ id: generateId(), name: "", sets: "", reps: "", weight: "" }]);
    setError("");
    setSuccess("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const name = routineName.trim();
      if (!name) {
        setError("El nombre de la rutina es requerido");
        setLoading(false);
        return;
      }

      // Filtra ejercicios no vacíos
      const nonEmpty = exercises.filter(
        (ex) => ex.name.trim() || ex.sets || ex.reps || ex.weight !== ""
      );
      if (nonEmpty.length === 0) {
        setError("Debe haber al menos un ejercicio");
        setLoading(false);
        return;
      }

    
      for (const ex of nonEmpty) {
        if (!ex.name.trim()) {
          setError("Todos los ejercicios deben tener nombre");
          setLoading(false);
          return;
        }
        const sets = parseInt(ex.sets, 10);
        const reps = parseInt(ex.reps, 10);
        if (!Number.isInteger(sets) || sets <= 0) {
          setError(`Las series del ejercicio "${ex.name}" deben ser un entero positivo`);
          setLoading(false);
          return;
        }
        if (!Number.isInteger(reps) || reps <= 0) {
          setError(`Las repeticiones del ejercicio "${ex.name}" deben ser un entero positivo`);
          setLoading(false);
          return;
        }
        if (ex.weight !== "" && (isNaN(Number(ex.weight)) || Number(ex.weight) < 0)) {
          setError(`El peso de "${ex.name}" debe ser un número >= 0 o dejarse vacío`);
          setLoading(false);
          return;
        }
      }

      const routineData = {
        name,
        exercises: nonEmpty.map((ex) => ({
          name: ex.name.trim(),
          sets: parseInt(ex.sets, 10),
          reps: parseInt(ex.reps, 10),
          weight: ex.weight === "" ? null : Number(ex.weight),
        })),
      };

      const resp = await fetch(`${API_BASE}/routines`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(routineData),
      });

      const data = await resp.json();

      if (resp.ok) {
        setSuccess(`Rutina "${data.name}" guardada exitosamente`);
        resetForm();
        fetchRoutines();
      } else {
        setError(data?.err || "Error al guardar la rutina");
      }
    } catch (error) {
      setError("Error de conexión al guardar la rutina");
      console.error("Error saving routine:", error);
    } finally {
      setLoading(false);
    }
  };

  
  const deleteRoutine = async (routine) => {
    if (!window.confirm(`¿Eliminar la rutina "${routine.name}"?`)) return;
    try {
      const resp = await fetch(`${API_BASE}/routines/${routine.id}`, {
        method: "DELETE",
      });
      if (resp.ok) {
        setRoutines((prev) => prev.filter((r) => r.id !== routine.id));
        setSuccess("Rutina eliminada correctamente");
      } else {
        const data = await resp.json();
        setError(data?.err || "Error al eliminar rutina");
      }
    } catch (error) {
      console.error("Error deleting routine:", error);
      setError("Error de conexión al eliminar rutina");
    }
  };

  return (
    <div className="container-fluid py-4 mt-5">
      <div className="row g-4">
        {/* Formulario - Responsive */}
        <div className="col-12 col-lg-6">
          <div className="card shadow-sm h-100">
            <div className="card-header bg-primary text-white">
              <h5 className="card-title mb-0">
                <i className="fas fa-plus-circle me-2"></i>
                Nueva Rutina
              </h5>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                {/* Nombre de rutina */}
                <div className="mb-3">
                  <label htmlFor="routineName" className="form-label fw-semibold">
                    Nombre de la rutina <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="routineName"
                    placeholder="Ej. Rutina de fuerza"
                    value={routineName}
                    onChange={(e) => setRoutineName(e.target.value)}
                    disabled={loading}
                  />
                </div>

                {/* Ejercicios */}
                <div className="mb-3">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <label className="form-label fw-semibold mb-0">
                      Ejercicios <span className="text-danger">*</span>
                    </label>
                    <button
                      type="button"
                      className="btn btn-outline-primary btn-sm"
                      onClick={addExercise}
                      disabled={loading}
                    >
                      <i className="fas fa-plus me-1"></i>
                      Agregar
                    </button>
                  </div>

                  {exercises.map((ex, idx) => (
                    <div key={ex.id} className="card mb-3 border-light">
                      <div className="card-body p-3 bg-light">
                        <div className="row g-2">
                          {/* Nombre del ejercicio */}
                          <div className="col-12 col-md-6">
                            <label className="form-label small text-muted">
                              Ejercicio #{idx + 1}
                            </label>
                            <input
                              type="text"
                              className="form-control form-control-sm"
                              placeholder="Ej. Press banca"
                              value={ex.name}
                              onChange={(e) =>
                                updateExercise(ex.id, "name", e.target.value)
                              }
                              disabled={loading}
                            />
                          </div>

                          {/* Series */}
                          <div className="col-4 col-md-2">
                            <label className="form-label small text-muted">
                              Series
                            </label>
                            <input
                              type="number"
                              className="form-control form-control-sm"
                              min="1"
                              step="1"
                              placeholder="4"
                              value={ex.sets}
                              onChange={(e) =>
                                updateExercise(ex.id, "sets", e.target.value)
                              }
                              disabled={loading}
                            />
                          </div>

                          {/* Reps */}
                          <div className="col-4 col-md-2">
                            <label className="form-label small text-muted">
                              Reps
                            </label>
                            <input
                              type="number"
                              className="form-control form-control-sm"
                              min="1"
                              step="1"
                              placeholder="10"
                              value={ex.reps}
                              onChange={(e) =>
                                updateExercise(ex.id, "reps", e.target.value)
                              }
                              disabled={loading}
                            />
                          </div>

                          {/* Peso (opcional) */}
                          <div className="col-4 col-md-2">
                            <label className="form-label small text-muted">
                              Peso (kg)
                            </label>
                            <input
                              type="number"
                              className="form-control form-control-sm"
                              min="0"
                              step="0.5"
                              placeholder="40"
                              value={ex.weight}
                              onChange={(e) =>
                                updateExercise(ex.id, "weight", e.target.value)
                              }
                              disabled={loading}
                            />
                          </div>
                        </div>

                        {/* Botón eliminar */}
                        {exercises.length > 1 && (
                          <div className="text-end mt-2">
                            <button
                              type="button"
                              className="btn btn-outline-danger btn-sm"
                              onClick={() => removeExercise(ex.id)}
                              disabled={loading}
                            >
                              <i className="fas fa-trash me-1"></i>
                              Eliminar
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Mensajes de error/éxito */}
                {error && (
                  <div className="alert alert-danger d-flex align-items-center" role="alert">
                    <i className="fas fa-exclamation-triangle me-2"></i>
                    {error}
                  </div>
                )}

                {success && (
                  <div className="alert alert-success d-flex align-items-center" role="alert">
                    <i className="fas fa-check-circle me-2"></i>
                    {success}
                  </div>
                )}

                {/* Botones */}
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={resetForm}
                    disabled={loading}
                  >
                    <i className="fas fa-undo me-1"></i>
                    Limpiar
                  </button>
                  <button
                    type="submit"
                    className="btn btn-success"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span
                          className="spinner-border spinner-border-sm me-2"
                          role="status"
                          aria-hidden="true"
                        ></span>
                        Guardando...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-save me-1"></i>
                        Guardar rutina
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Lista de rutinas */}
        <div className="col-12 col-lg-6">
          <div className="card shadow-sm h-100">
            <div className="card-header bg-info text-white d-flex justify-content-between align-items-center">
              <h5 className="card-title mb-0">
                <i className="fas fa-list me-2"></i>
                Rutinas guardadas
              </h5>
              <button
                className="btn btn-outline-light btn-sm"
                onClick={() => setMostrar(!mostrar)}
              >
                {mostrar ? (
                  <>
                    <i className="fas fa-eye-slash me-1"></i>Ocultar
                  </>
                ) : (
                  <>
                    <i className="fas fa-eye me-1"></i>Mostrar
                  </>
                )}{" "}
                ({routines.length})
              </button>
            </div>

            {mostrar && (
              <div className="card-body">
                {routines.length === 0 ? (
                  <div className="text-center py-5">
                    <i className="fas fa-dumbbell fa-3x text-muted mb-3"></i>
                    <p className="text-muted">No hay rutinas guardadas</p>
                    <small className="text-muted">
                      Crea tu primera rutina usando el formulario
                    </small>
                  </div>
                ) : (
                  <div className="row g-3" style={{ maxHeight: "500px", overflowY: "auto" }}>
                    {routines.map((routine) => (
                      <div key={routine.id} className="col-12">
                        <div className="card border-start border-primary border-3">
                          <div className="card-body p-3">
                            <div className="d-flex justify-content-between align-items-start mb-2">
                              <h6 className="card-title mb-0 fw-bold">
                                <i className="fas fa-running me-2 text-primary"></i>
                                {routine.name}
                              </h6>
                              <button
                                className="btn btn-outline-danger btn-sm"
                                onClick={() => deleteRoutine(routine)}
                              >
                                <i className="fas fa-trash"></i>
                              </button>
                            </div>

                            {/* Lista de ejercicios */}
                            <div className="mb-2">
                              {routine.exercises.map((ex, idx) => (
                                <div
                                  key={idx}
                                  className="d-flex flex-wrap align-items-center mb-1 p-2 bg-light rounded"
                                >
                                  <span className="fw-semibold me-2">{ex.name}</span>
                                  <div className="d-flex flex-wrap gap-1">
                                    <span className="badge bg-primary">{ex.sets} series</span>
                                    <span className="badge bg-secondary">{ex.reps} reps</span>
                                    {ex.weight !== null && ex.weight !== undefined && (
                                      <span className="badge bg-success">{ex.weight} kg</span>
                                    )}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}