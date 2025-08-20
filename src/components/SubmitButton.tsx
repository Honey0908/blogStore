import { useFormStatus } from 'react-dom';
import { Button } from './ui/button';

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      disabled={pending}
      className="bg-blue-600 hover:bg-blue-700 text-white"
    >
      {pending ? 'Adding...' : 'Add Blog'}
    </Button>
  );
};

export default SubmitButton;
