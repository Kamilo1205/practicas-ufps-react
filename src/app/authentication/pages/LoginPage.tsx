import { Link } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { HiOutlineEnvelope } from 'react-icons/hi2';
import { FcGoogle } from 'react-icons/fc';
import { toast } from 'sonner';

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/Form';
import { InputWithToggle } from '@/components/ui/InputWithToggle';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

import { loginSchema, LoginSchema } from '../schemas/authSchema';
import { useAuth } from '../context/AuthContext';

export const LoginPage = () => {
  const form = useForm<LoginSchema>({ 
    resolver: zodResolver(loginSchema),
    defaultValues: { email: '', password: '' }
  });
  const { loginMutation } = useAuth();
  
  const onSubmit: SubmitHandler<LoginSchema> = async(data) => {
    try {
      await loginMutation.mutateAsync(data);
    } catch (error: any) {
      toast.error('Error en el inicio de sesión', {
        description: error.response?.data?.message || 
        'Ocurrió un error en el servidor. Por favor, verifica tus credenciales e inténtalo de nuevo.',
      });
    }
  }

  const handleLoginGoogle = () => {
    window.open(`${import.meta.env.VITE_API_BASE_URL}/authentication/google`, '_self');
  }

  return (
    <div className="flex flex-col h-full justify-center items-center">
      <h1 className="text-3xl sm:text-4xl font-bold mb-10">Iniciar sesion</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-full max-w-72 sm:max-w-[32rem]">
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
                <div className="flex justify-between">
                  <FormLabel>Contraseña</FormLabel>
                  <Link 
                    tabIndex={-1}
                    to="/authentication/forgot-password"
                    className="text-sm"
                  >
                    Olvidates tu contraseña?
                  </Link>
                </div>
                <FormControl>
                  <InputWithToggle type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button 
            className="w-full gap-x-2" 
            type="submit"
            disabled={loginMutation.isPending}
          >
            <HiOutlineEnvelope className="text-lg"/>
            Iniciar sesion con correo electrónico
          </Button>
          
          <Button 
            className="w-full flex gap-x-2 items-center justify-center" 
            variant="outline" 
            type="button"
            disabled={loginMutation.isPending}
            onClick={handleLoginGoogle}
          >
            <FcGoogle className="text-lg"/>
            Iniciar sesion con google
          </Button>
        </form>
      </Form>

      <div className="text-sm mt-6">
        No tiene una cuenta? {" "}
        <Link className="font-medium" to="/authentication/register">Registrate</Link>
      </div>
    </div>
  );
}
