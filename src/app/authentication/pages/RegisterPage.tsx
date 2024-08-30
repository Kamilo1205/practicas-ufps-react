import { Link, useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/Form';
import { InputWithToggle } from '@/components/ui/InputWithToggle';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

import { useRegister } from '../hooks/useAuthentication';
import { registerSchema, RegisterSchema } from '../schemas/authSchema';

export const RegisterPage = () => {
  const navigate = useNavigate();

  const form = useForm<RegisterSchema>({ 
    resolver: zodResolver(registerSchema),
    defaultValues: { email: '', password: '', username: '' }
  });
  
  const registerMutation = useRegister();

  const onSubmit: SubmitHandler<RegisterSchema> = async(data) => {
    try {
      await registerMutation.mutateAsync(data);
      toast.success('¡Registro exitoso!', {
        description: 'Tu cuenta ha sido creada con éxito. Por favor, confirma tu correo electrónico para activar tu cuenta.',
        duration: 6000,
      });      
      navigate('/authentication');
    } catch (error: any) {
      toast.error('Error en el registro', {
        description: error.response?.data?.message || 
        'Ocurrió un error en el servidor. Por favor, inténtalo de nuevo más tarde.',
      });      
      form.reset();
    }
  }
 
  return (
    <div className="flex flex-col h-full justify-center items-center">
      <h1 className="text-3xl sm:text-4xl font-bold">Registrar nueva cuenta</h1>
      <h2 className="text-base font-semibold text-gray-400 mb-10">Empresa o Dependencia</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-full max-w-72 sm:max-w-[32rem]">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre</FormLabel>
                <FormControl>
                  <Input placeholder="Nombre de empresa o dependencia" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

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

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Contraseña</FormLabel>
                <FormControl>
                  <InputWithToggle type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button 
            className="w-full" 
            type="submit"
            disabled={registerMutation.isPending}
          >
            {
              registerMutation.isPending &&
              <h1>Esta pendiendte</h1>
            }
            Registrarse
          </Button>
        </form>
      </Form>

      <div className="text-sm mt-6">
        Ya tiene una cuenta? {" "}
        <Link className="font-medium" to="/authentication">Iniciar sesión</Link>
      </div>
    </div>
  );
}
