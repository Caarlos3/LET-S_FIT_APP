from flask import Flask, jsonify, request
from flask_cors import CORS
from datetime import datetime
import json
import os


app = Flask(__name__)
CORS(app)

DATA_FILE = "routines.json"
PERSONAL_INFO_FILE = "personal_info.json"
GYM_WEEKS_FILE = "gym_weeks.json"


def load_gym_weeks():
    if os.path.exists(GYM_WEEKS_FILE):
        try:
            with open(GYM_WEEKS_FILE, "r", encoding="utf-8") as f:
                data = json.load(f)
             
                if isinstance(data, list):
                    return data
                else:
                    return []
        except Exception:
            return []
    return []

def save_gym_weeks(weeks):
    try:
        with open(GYM_WEEKS_FILE, "w", encoding="utf-8") as f:
            json.dump(weeks, f, indent=2, ensure_ascii=False)
        return True
    except Exception:
        return False

def validate_week_payload(data):
    if not data:
        return "No se ha enviado ningún dato"

    year = data.get("year")
    week = data.get("week")
    start = data.get("start")
    end = data.get("end")
    arr = data.get("data")

    if not isinstance(year, int) or year <= 0:
        return "El año debe ser un número entero positivo"
    if not isinstance(week, int) or not (1 <= week <= 53):
        return "La semana debe estar entre 1 y 53"
    if not isinstance(start, str) or not isinstance(end, str):
        return "start y end deben ser strings con formato YYYY-MM-DD"
    if not isinstance(arr, list) or len(arr) != 7 or not all(isinstance(x, (int, float)) and x >= 0 for x in arr):
        return "data debe ser un arreglo de 7 números no negativos"

    try:
        datetime.fromisoformat(start)
        datetime.fromisoformat(end)
    except Exception:
        return "start/end deben tener formato ISO válido (YYYY-MM-DD)"

    return None


@app.route("/gym/weeks", methods=["POST"])
def upsert_gym_week():
    data = request.get_json()
    error = validate_week_payload(data)
    if error:
        return jsonify({"err": error}), 400

    year = data["year"]
    week = data["week"]
    start = data["start"]
    end = data["end"]
    arr = data["data"]

    total_minutes = int(sum(arr))

    weeks = load_gym_weeks()
    idx = next((i for i, w in enumerate(weeks) if w["year"] == year and w["week"] == week), None)

    record = {
        "year": year,
        "week": week,
        "start": start,
        "end": end,
        "data": arr,
        "total_minutes": total_minutes,
        "updatedAt": datetime.now().isoformat()
    }

    if idx is None:
        record["createdAt"] = record["updatedAt"]
        weeks.append(record)
    else:
        record["createdAt"] = weeks[idx].get("createdAt", datetime.now().isoformat())
        weeks[idx] = record

    if save_gym_weeks(weeks):
        return jsonify(record), 201
    else:
        return jsonify({"err": "No se ha podido guardar el registro semanal"}), 500


@app.route("/gym/weeks", methods=["GET"])
def list_gym_weeks():
    year = request.args.get("year", type=int)
    week = request.args.get("week", type=int)

    weeks = load_gym_weeks()

    if year is not None and week is not None:
        found = next((w for w in weeks if w["year"] == year and w["week"] == week), None)
        return jsonify([found] if found else []), 200

    if year is not None:
        filt = [w for w in weeks if w["year"] == year]
        filt.sort(key=lambda x: x["week"])
        return jsonify(filt), 200

    weeks.sort(key=lambda x: (x["year"], x["week"]), reverse=True)
    return jsonify(weeks), 200


@app.route("/gym/weeks/<int:year>/<int:week>", methods=["GET"])
def get_gym_week(year, week):
    weeks = load_gym_weeks()
    found = next((w for w in weeks if w["year"] == year and w["week"] == week), None)
    if not found:
        return jsonify({"err": "Registro no encontrado"}), 404
    return jsonify(found), 200

@app.route("/gym/weeks/<int:year>/<int:week>", methods=["DELETE"])
def delete_gym_week(year, week):
    weeks = load_gym_weeks()
    exists = any(w for w in weeks if w["year"] == year and w["week"] == week)
    if not exists:
        return jsonify({"err": "Registro no encontrado"}), 404
    weeks = [w for w in weeks if not (w["year"] == year and w["week"] == week)]
    if save_gym_weeks(weeks):
        return jsonify({"message": "Registro eliminado correctamente"}), 200
    else:
        return jsonify({"err": "No se ha podido eliminar el registro"}), 500



def load_personal_info():
    if os.path.exists(PERSONAL_INFO_FILE):
        try:
          with open(PERSONAL_INFO_FILE, "r") as file:
            return json.load(file)
        except:
           return {}
        
    return {}

def save_personal_info(info):
    try:
      with open(PERSONAL_INFO_FILE, "w") as file:
        json.dump(info, file, indent=2,  ensure_ascii=False)
        return True
    except:
       return False

@app.route("/personal_info", methods=["GET"])
def get_personal_info():
    info = load_personal_info()
    return jsonify(info),200

@app.route("/personal_info", methods=["POST"])
def save_personal_info_route():
    data = request.get_json()

    if not data:
        return jsonify({"err": "No se ha enviado ningun dato"}), 400
    

    edad = data.get("edad")
    peso = data.get("peso")
    altura = data.get("altura")

    
    if not isinstance(edad, int) or edad <= 0:
        return jsonify({"err": "La edad debe ser un numero entero positivo"}), 400
    
    if not isinstance(peso, (int, float)) or peso <= 0:
        return jsonify({"err": "El peso debe ser un numero positivo"}), 400
    
    if not isinstance(altura, (int, float)) or altura <= 0:
        return jsonify({"err": "La altura debe ser un numero positivo"}), 400
    
    new_info = {
        "edad": edad,
        "peso": peso,
        "altura": altura,
        "updatedAt": datetime.now().isoformat()
    }

    if  save_personal_info(new_info):
        return jsonify(new_info), 201
    else:
        return jsonify({"err": "No se ha podido guardar la informacion personal"}), 500




def load_routines():
    if os.path.exists(DATA_FILE):
        try:
          with open(DATA_FILE, "r") as file:
            return json.load(file)
        except:
           return []
        
    return []

def save_routines(routines):
    try:
      with open(DATA_FILE, "w") as file:
        json.dump(routines, file, indent=2,  ensure_ascii=False)
        return True
    except:
       return False

@app.route("/")
def home():
    return jsonify({"message": "Hola desde Flask LetsCODE"})


@app.route("/routines", methods=["POST"])
def create_routines():
    data = request.get_json()

    if not data:
        return jsonify({"err": "No se ha enviado ningun dato"}), 400
    
    name = (data.get("name") or "").strip()
    exercises = data.get("exercises") or []

    if not name:
        return jsonify({"err": "El nombre es obligatorio"}), 400
    
    if not exercises:
        return jsonify({"err": "Debe haber al menos un ejercicio"}), 400
    
    for i, exercise in enumerate(exercises):
        exercise_name = (exercise.get("name") or "").strip()
        weight = exercise.get("weight")
        sets = exercise.get("sets")
        reps = exercise.get("reps")

        if not exercise_name:
            return jsonify({"err": f"El nombre del ejercicio en la posicion {i} es obligatorio"}), 400
        
        if not isinstance(sets, int) or sets <= 0:
            return jsonify({"err": f"Las series del ejercicio {exercise_name} deben ser un numero entero positivo"}), 400
        
        if not isinstance(reps, int) or reps <= 0:
            return jsonify({"err": f"Las repeticiones del ejercicio {exercise_name} deben ser un numero entero positivo"}), 400
        
        if weight is not None and (not isinstance(weight, (int, float)) or weight < 0):
            return jsonify({"err": f"El peso del ejercicio {exercise_name} debe ser un numero positivo"}), 400
        
        routines = load_routines()

    new_routine = {
        "id": (routines[-1]["id"] + 1) if routines else 1,
        "name": name,
        "exercises": exercises,
        "createdAt": datetime.now().isoformat(),
        "updatedAt": datetime.now().isoformat()
    }

    routines.append(new_routine)
    if  save_routines(routines):
        return jsonify(new_routine), 201
    else:
        return jsonify({"err": "No se ha podido guardar la rutina"}), 500
    

@app.route("/routines", methods=["GET"])
def get_routines():
    routines = load_routines()
    return jsonify(routines),200


@app.route("/routines/<int:routine_id>", methods=["DELETE"])
def delete_routine(routine_id):
    routines = load_routines()
    routine = next((r for r in routines if r["id"] == routine_id), None)

    if not routine:
        return jsonify({"err": "No se ha encontrado la rutina"}), 404
    
    routines = [r for r in routines if r["id"] != routine_id]

    if save_routines(routines):
        return jsonify({"message": "Rutina eliminada correctamente"}), 200
    else:
        return jsonify({"err": "No se ha podido eliminar la rutina"}), 500


if __name__ == "__main__":
    app.run(debug=True, port=5001, host="0.0.0.0")



