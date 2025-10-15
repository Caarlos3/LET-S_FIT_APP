from flask import Flask, jsonify, request
from flask_cors import CORS
from datetime import datetime
import json
import os


app = Flask(__name__)
CORS(app)

DATA_FILE = "routines.json"
PERSONAL_INFO_FILE = "personal_info.json"

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



