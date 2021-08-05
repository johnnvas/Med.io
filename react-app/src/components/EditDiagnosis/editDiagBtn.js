import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {  deleteDIAGNOSISThunk } from '../../store/diagnosis'
import './edit.css'
import EditDiagnosis from "../EditDiagnosis";

function EditDiagnosisButton({d}) {
  const [showMenu, setShowMenu] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const dispatch = useDispatch();


  // const refresh = () => {
  //     dispatch(getCARDSThunk());
  //   };


  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  const closeMenu = () => {
    if (!showMenu) return;
    setShowMenu(false);
  };

  const openEdit = () => {
    if (showEdit) return;
    setShowEdit(true);
  };
  const closeEdit = () => {
    if (!showEdit) return;
    setShowEdit(false);
  };

  useEffect(() => {
    if (!showMenu) return;
    const closeMenu = () => {
      setShowMenu(false);
    };
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  useEffect(() => {
    if (!showEdit) return;

    const closeEdit = () => {
      setShowEdit(false);
    };

    return () => document.removeEventListener("click", closeEdit);
  }, [showEdit]);

  return (
    <div className="edit-menu">
      <button
        className="edit-button"
        id="elipses2"
        onClick={showMenu === true ? closeMenu : openMenu}
      ></button>

      {showMenu && (
        <div className="edit-dropdown">
          <button
            onClick={showEdit === true ? closeEdit : openEdit}
            className="edit-btn editing-post"
            id="edit-btn"
          >
            Edit
          </button>
          <button
            className="delete-btn edit-btn"
            onClick={() => {

              dispatch(deleteDIAGNOSISThunk(d.id ))
            }}
          >
            Delete
          </button>
          {showEdit && <EditDiagnosis d={d} />}
        </div>
      )}
    </div>)
}

export default EditDiagnosisButton
