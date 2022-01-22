import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import RatingComponent from "../../../Rating";
import { TextareaAutosize, Typography } from "@mui/material";
import { AddReviewButton, FormContiner } from "./Form.styled";

const SignupSchema = Yup.object().shape({
  rating: Yup.string().required("Rating is Required"),
  comment: Yup.string().required("Comment is Required"),
});

export const MainForm = () => (
  <Formik
    initialValues={{
      rating: 0,
      comment: "",
    }}
    validationSchema={SignupSchema}
    onSubmit={(values) => {
      alert(JSON.stringify(values, null, 2));
    }}
  >
    {({ values, errors, touched, handleChange, setFieldValue }) => (
      <FormContiner>
        <label htmlFor="rating">Your rating: </label>
        <RatingComponent
          id="rating"
          name="rating"
          value={values.rating}
          onChangeValue={(value: number) => setFieldValue("rating", value)}
        />
        {errors.rating && touched.rating ? (
          <Typography variant="caption" color="red">
            {errors.rating}
          </Typography>
        ) : null}
        <label htmlFor="comment">Your comment: </label>
        <TextareaAutosize
          id="comment"
          name="comment"
          onChange={handleChange}
          minRows={5}
        />
        {errors.comment && touched.comment ? (
          <Typography variant="caption" color="red">
            {errors.comment}
          </Typography>
        ) : null}
        <AddReviewButton type="submit">Add Review</AddReviewButton>
      </FormContiner>
    )}
  </Formik>
);
