import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCARDSThunk, deleteCARDThunk } from '../../store/patientcard'
import './patientcards.css'
import EditComment from "../EditComment";

function EditButton({ pc }) {
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
        id="elipses"
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
              console.log('THIS IS PCID!!!!!!!!!!!',pc.id)
              dispatch(deleteCARDThunk(pc.id ))
            }}
          >
            Delete
          </button>
          {showEdit && <EditComment pc={pc} />}
        </div>
      )}
    </div>)
}

export default EditButton
