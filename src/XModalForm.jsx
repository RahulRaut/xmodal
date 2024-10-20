import { useState } from "react";
import Modal from "react-modal";
import { Input, Button } from "@mui/material";
import styles from "./XModalForm.module.css";

function XModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({
    username: "",
    email: "",
    dob: "",
    phone: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.username || !form.email || !form.dob || !form.phone) {
      alert("Please fill out all fields.");
    } else if (!form.email.includes("@")) {
      alert("Invalid email. Please check your email address.");
    } else if (form.phone.length !== 10) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
    } else if (new Date(form.dob) > new Date()) {
      alert("Invalid date of birth. Please enter a valid date.");
    } else {
      setIsOpen(false);
    }
  };

  return (
    <div>
      <h1 className={styles.head}>User Details Modal</h1>
      <div className={styles.btn}>
        <Button
          onClick={() => setIsOpen(true)}
          style={{
            backgroundColor: "blue",
            color: "white",
            borderRadius: "10px",
            padding: "10px",
            margin: "10px",
          }}
        >
          Open Form
        </Button>
      </div>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        shouldCloseOnOverlayClick={true}
        className={styles.modal}
        overlayForm={styles.overlay}
      >
        {isOpen && (
          <div className={styles.modalContent}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.inpDtCn}>
                Username:
                <div className={styles.inpBox}>
                  <Input
                    id="username"
                    onChange={handleChange}
                    placeholder="Username"
                    style={{ width: "100%" }}
                    required
                  />
                </div>
              </div>

              <div className={styles.inpDtCn}>
                E-mail ID:
                <div className={styles.inpBox}>
                  <Input
                    id="email"
                    onChange={handleChange}
                    placeholder="Email"
                    type="email"
                    style={{ width: "100%" }}
                    required
                  />
                </div>
              </div>

              <div className={styles.inpDtCn}>
                Phone Number:
                <div className={styles.inpBox}>
                  <Input
                    id="phone"
                    onChange={handleChange}
                    placeholder="Phone Number"
                    style={{ width: "100%" }}
                    required
                  />
                </div>
              </div>

              <div className={styles.inpDtCn}>
                Date of Birth:
                <div className={styles.inpBox}>
                  <Input
                    id="dob"
                    type="date"
                    onChange={handleChange}
                    style={{ width: "100%" }}
                    required
                  />
                </div>
              </div>

              <div className={styles.btn}>
                <Button
                  className={styles.Button}
                  type="submit"
                  onChange={handleSubmit}
                  style={{ backgroundColor: "blue", color: "white" }}
                >
                  Submit
                </Button>
              </div>
            </form>
          </div>
        )}
      </Modal>
    </div>
  );
}

export default XModal;
