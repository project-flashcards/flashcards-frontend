import Modal from "./Modal";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {createCard} from '../../api/cardsApi';


interface CreateCardModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CreateCardModal: React.FC<CreateCardModalProps> = ({ isOpen, onClose }) => {
  const createForm = <Formik initialValues={{ title: '', description: '', tags: [] }} validationSchema={Yup.object({
    title: Yup.string().min(2, 'Must be at least 2 characters').required('Required'),
    description: Yup.string().min(6, 'Must be at least 6 characters').required('Required'),
  })}
    onSubmit={(values, { setSubmitting }) => {
      createCard(values);
      setSubmitting(false);
    }}
  >
    {({ isSubmitting }) => (
      <Form>
        <div className="sm:col-span-4">
          <label htmlFor="title" className="block text-sm/6 font-medium text-black">Title</label>
          <Field placeholder="title" name="title" type="text" className="bg-red-50 block min-w-0 grow bg-transparent py-1.5 pl-1 pr-3 text-base text-white placeholder:text-gray-500 focus:outline focus:outline-0 sm:text-sm/6"/>
          <ErrorMessage name="title" component="div" />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <Field name="description" type="text" />
          <ErrorMessage name="description" component="div" />
        </div>
        <button type="submit" disabled={isSubmitting}>Submit</button>
      </Form>
    )}
  </Formik>

  return (
    <Modal title="Add card" isOpen={isOpen} onClose={onClose}>{createForm}</Modal>
  );
};