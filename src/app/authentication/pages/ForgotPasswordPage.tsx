import { Link } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/Form';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { useForgotPassword } from '../hooks/useAuthentication';
import { forgotPasswordSchema, ForgotPasswordSchema } from '../schemas/authSchema';

export const ForgotPasswordPage = () => {
  const form = useForm<ForgotPasswordSchema>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: { email: '' }
  });
  const forgotPasswordMutation = useForgotPassword();

  const onSubmit: SubmitHandler<ForgotPasswordSchema> = async (data) => {
    try {
      await forgotPasswordMutation.mutateAsync(data);
      toast.success('¡Correo enviado!', {
        description: 'Hemos enviado un correo con las instrucciones para recuperar tu contraseña. Revisa tu bandeja de entrada.',
      }); 
      form.reset();
    } catch (error: any) {
      toast.error('Error al enviar el correo', {
        description: error.response?.data?.message || 
        'No se pudo enviar el correo para recuperar la contraseña. Por favor, intenta de nuevo más tarde.',
      });
    }
  };

  return (
    <div className="flex flex-col h-full justify-center items-center">
      <h1 className="text-2xl sm:text-4xl font-bold mb-10">Recuperar Contraseña</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full max-w-72 sm:max-w-[32rem]">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Correo Electrónico</FormLabel>
                <FormControl>
                  <Input placeholder="example@correo.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button className="w-full" type="submit">Enviar correo de recuperación</Button>
        </form>
      </Form>

      <div className="text-sm mt-6">
        Ya tiene una cuenta? {" "}
        <Link className="font-medium" to="/authentication">Iniciar sesión</Link>
      </div>
    </div>
  );
}
