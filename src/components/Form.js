import React, { useState, useEffect } from "react";
import axios from "axios";
import * as yup from "yup";
import { Link } from "react-router-dom";
// import { validate } from "@babel/types";

const formSchema = yup.object().shape({
    name: yup
        .string()
        .required("Name is Required")
        .min(2, "Name must be 2 characters or more"),
    size: yup.string().required("Select a size"),
    pepperoni: yup.boolean().oneOf([true]),
    onions: yup.boolean().oneOf([true]),
    peppers: yup.boolean().oneOf([true]),
    tomatoes: yup.boolean().oneOf([true]),
    textarea: yup.string()
});

const Form = () => {
    const [button, setButton] = useState(true);

    const [formState, setFormState] = useState({
        name: "",
        size: "",
        pepperoni: "",
        onions: "",
        peppers: "",
        tomatoes: "",
        textarea: ""
    });

    const [errors, setErrors] = useState({
        name: "",
        size: "",
        pepperoni: "",
        onions: "",
        peppers: "",
        tomatoes: "",
        textarea: ""
    });

    const [post, setPost] = useState([]);

    useEffect(() => {
        formSchema.isValid(formState).then(valid => {
            setButton(!valid);
        });
    }, [formState]);

    const formSubmit = e => {
        e.preventDefault();
        axios
            .post("https://reqres.in/api/pizza", formState)
            .then(response => {
                setPost(response.data);

                setFormState({
                    name: "",
                    size: "",
                    pepperoni: "",
                    onions: "",
                    peppers: "",
                    tomatoes: "",
                    textarea: ""
                });
            })
            .catch(error => console.log("something is wrong", error.response));
    };

    const validateChange = e => {
        yup
            .reach(formSchema, e.target.name)
            .validate(e.target.name === "checked" ? e.target.checked : e.target.value)
            .then(valid => {
                setErrors({
                    ...errors,
                    [e.target.name]: ""
                });
            })
            .catch(error => {
                setErrors({
                    ...errors,
                    [e.target.name]: error.errors[0]
                });
            });
    };

    const inputChange = e => {
        e.persist();
        const newFormData = {
            ...formState,
            [e.target.name]:
                e.target.type === "checkbox" ? e.target.checked : e.target.value
        };
        validateChange(e);
        setFormState(newFormData);
    };

    return (
        <form onSubmit={formSubmit}>
            <Link to={"/"}>
                <div>Home</div>
            </Link>
            <label htmlFor="name">
                Name:
        <input
                    id="name"
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={inputChange}
                />
                {errors.name.length > 0 ? <p className="error">{errors.name}</p> : null}
            </label>
            <br />

            <label htmlFor="size">
                What size Pizza:
        <select id="size" name="size" onChange={inputChange}>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                </select>
            </label>
            <br />

            <label htmlFor="pepperoni">
                pepperoni
        <input
                    id="pepperoni"
                    type="checkbox"
                    name="pepperoni"
                    checked={formState.pepperoni}
                    onChange={inputChange}
                />
                {errors.pepperoni.length > 0 ? (
                    <p className="error">{errors.pepperoni}</p>
                ) : null}
            </label>
            <br />

            <label htmlFor="onions">
                onions
        <input
                    id="onions"
                    type="checkbox"
                    name="onions"
                    checked={formState.onions}
                    onChange={inputChange}
                />
                {errors.onions.length > 0 ? (
                    <p className="error">{errors.onions}</p>
                ) : null}
            </label>
            <br />

            <label htmlFor="peppers">
                peppers
        <input
                    id="peppers"
                    type="checkbox"
                    name="peppers"
                    checked={formState.peppers}
                    onChange={inputChange}
                />
                {errors.peppers.length > 0 ? (
                    <p className="error">{errors.peppers}</p>
                ) : null}
            </label>
            <br />

            <label htmlFor="tomatoes">
                tomatoes
        <input
                    id="tomatoes"
                    type="checkbox"
                    name="tomatoes"
                    checked={formState.tomatoes}
                    onChange={inputChange}
                />
                {errors.tomatoes.length > 0 ? (
                    <p className="error">{errors.tomatoes}</p>
                ) : null}
            </label>
            <br />

            <label htmlFor="textarea">
                Comments:
        <textarea
                    id="textarea"
                    type="text"
                    name="textarea"
                    value={formState.textarea}
                    onChange={inputChange}
                />
                {errors.textarea.length > 0 ? (
                    <p className="error">{errors.flavor}</p>
                ) : null}
            </label>
            <br />

            <pre>{JSON.stringify(post, null, 2)}</pre>
            <button name="button" disable={button}>
                Submit
      </button>
        </form>
    );
};

export default Form;