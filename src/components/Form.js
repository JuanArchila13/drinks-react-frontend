import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const DynamicForm = ({ fields, onSubmit, buttonText = "Submit" }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    onSubmit(data);
  };

  return (
    <Form onSubmit={handleSubmit}>
      {fields.map((field, index) => (
        <Form.Group className="mb-3" controlId={field.id} key={index}>
          <Form.Label>{field.label}</Form.Label>
          <Form.Control
            type={field.type}
            name={field.name}
            placeholder={field.placeholder}
            defaultValue={field.defaultValue || ""}
          />
          {field.text && <Form.Text className="text-muted">{field.text}</Form.Text>}
        </Form.Group>
      ))}
      <br/>
      <Button variant="primary" type="submit">
        {buttonText}
      </Button>
    </Form>
  );
};