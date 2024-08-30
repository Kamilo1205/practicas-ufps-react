import { Link, useNavigate, useParams } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/Form';
import { InputWithToggle } from '@/components/ui/InputWithToggle';
import { Button } from '@/components/ui/Button';

import { resetPasswordSchema, ResetPasswordSchema } from '../schemas/authSchema';
import { useResetPassword } from '../hooks/useAuthentication';

export const ResetPasswordPage = () => {  
  const form = useForm<ResetPasswordSchema>({ 
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: { password: '', confirmPassword: '' }
  });
  const resetPasswordMutation = useResetPassword();
  const { token = '' } = useParams<{ token: string }>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<ResetPasswordSchema> = async(data) => {
    try {
      await resetPasswordMutation.mutateAsync({ token, ...data });
      toast.success('¡Contraseña actualizada!', {
        description: 'Tu contraseña ha sido cambiada con éxito. Ahora puedes iniciar sesión con tu nueva contraseña.',
      });
      navigate('/authentication');      
    } catch (error: any) {
      toast.error('Error en el cambio de contraseña', {
        description: error.response?.data?.message || 
        'No se pudo cambiar la contraseña. Por favor, intenta de nuevo más tarde.',
      });      
    }
  }
  
  return (
    <div className="flex flex-col h-full justify-center items-center">
      <h1 className="text-3xl sm:text-4xl font-bold mb-10">Cambiar la contraseña</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full max-w-72 sm:max-w-[32rem]">
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nueva Contraseña</FormLabel>
                <FormControl>
                  <InputWithToggle type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirma Contraseña</FormLabel>
                <FormControl>
                  <InputWithToggle type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button className="w-full" type="submit">Cambiar la contraseña</Button>
        </form>
      </Form>

      <div className="text-sm mt-6">
        Ya tiene una cuenta? {" "}
        <Link className="font-medium" to="/authentication">Inciar sesión</Link>
      </div>
    </div>
  );
}
