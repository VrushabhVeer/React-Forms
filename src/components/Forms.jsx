import React from 'react';
import { useState } from 'react';
import styles from "./form.module.css";

const Forms = () => {
    const [form, setForm] = useState({});

    const handleOnChange = (e) => {
        let { type, name, value, checked, files } = e.target;
        console.log(type, name, value, checked, files);

        if (type === "checkbox") {
            setForm({
                ...form,
                [name]: checked,
            });
        }
        else if (type == "file") {
            setForm({
                ...form,
                [name]: files,
            });
        }
        else {
            setForm({
                ...form,
                [name]: value,
            });
        }

    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(form);
    };

    const storeData = (e) => {
        localStorage.setItem("userData", form)
    }

    return (
        <div>
            <div className={styles.form}>
                <form onSubmit={handleOnSubmit}>
                    <div>
                        <label>Full Name</label>
                        <br />
                        <input
                            className={styles.input}
                            type="text"
                            name="username"
                            placeholder='Enter Name'
                            value={form.username}
                            onChange={handleOnChange}
                        />
                    </div>
                    <div>
                        <label>Email</label>
                        <br />
                        <input
                            className={styles.input}
                            type="email"
                            name="email"
                            placeholder='Enter Emial'
                            value={form.email}
                            onChange={handleOnChange}
                        />
                    </div>
                    <div>
                        <label>Password</label>
                        <br />
                        <input
                            className={styles.input}
                            type="password"
                            name="password"
                            placeholder='Enter Password'
                            value={form.password}
                            onChange={handleOnChange}
                        />
                    </div>
                    <div>
                        <label>Age</label>
                        <br />
                        <input
                            className={styles.input}
                            type="number"
                            name="age"
                            placeholder='Enter Age'
                            value={form.age}
                            onChange={handleOnChange}
                        />
                    </div>
                    <div>
                        <label>Salary</label>
                        <br />
                        <input
                            className={styles.input}
                            type="number"
                            name="salary"
                            placeholder='Enter Salary'
                            value={form.salary}
                            onChange={handleOnChange}
                        />
                    </div>
                    <div>
                        <label>Address</label>
                        <br />
                        <input
                            className={styles.address}
                            type="address"
                            name="address"
                            placeholder='Enter Your Address'
                            value={form.address}
                            onChange={handleOnChange}
                        />
                    </div>

                    <div>
                        <label>Gender</label>
                        <br />
                        <select
                            className={styles.select}
                            name="selectGender"
                            value={form.selectGender}
                            onChange={handleOnChange}
                        >
                            <option value="">Select</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>

                    <div>
                        <label>Marital Status</label>
                        <br />
                        <input
                            className={styles.checkbox}
                            type="checkbox"
                            name="isMarried"
                            checked={form.isMarried}
                            onChange={handleOnChange}
                        />
                        <label>Married</label>

                        <input
                            type="checkbox"
                            name="isSingle"
                            checked={form.isSingle}
                            onChange={handleOnChange}
                        />
                        <label>Single</label>
                    </div>

                    <div>
                        <label>Employee Resume</label>
                        <br />
                        <input
                            className={styles.file}
                            type="file"
                            name="resume"
                            accept='image/png, image/jpeg, application/pdf'
                            files={form.resume}
                            onChange={handleOnChange}
                        />
                        <br />
                        <label>Employee Photo</label>
                        <br />
                        <input
                            className={styles.photo}
                            type="file"
                            name="photos"
                            accept='image/png, image/jpeg, application/pdf'
                            files={form.photo}
                            onChange={handleOnChange}
                        />
                    </div>
                    <button type='submit' onClick={storeData}>SUBMIT</button>
                </form>
            </div>
        </div>
    )
}

export default Forms;