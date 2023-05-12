import React from "react";
import * as CheckServicio from "./CheckServicio";
import { toast } from "react-toastify";
import './ItemCheck.css'

const ItemCheck = ({ descripcion, id, cargarCheck, tipo, pos }) => {
  const eliminarCheck = async (id) => {
    const tid = toast.loading("Eliminando...");
    await CheckServicio.eliminarCheck(id)
      .then(async () => await cargarCheck())
      .then(() => {
        toast.update(tid, {
          render: `Check eliminado de ${
            tipo[0].toUpperCase() + tipo.substring(1)
          }`,
          type: "success",
          isLoading: false,
          autoClose: 1500,
          closeOnClick: true,
        });
      });
  };
  return (
    <div className="m-3 border-bottom border-4">
      <div className="d-flex ">
        <div className="me-1">{pos + ")"}</div>
        <div className="form-check d-flex justify-content-between align-items-center w-100">
          <div className="w-100 align-items-center">
            <input
              className="form-check-input me-1"
              type="checkbox"
              value=""
              id={`check-${tipo}-${pos}`}
            />
            <label className="form-check-label w-100" htmlFor={`check-${tipo}-${pos}`}>
              {descripcion}
            </label>
          </div>

          <div
            className=" btn btn-outline-dark bt-check btn-sm ms-3"
            onClick={() => id && eliminarCheck(id)}
          >
            <i className="bi bi-trash"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCheck;