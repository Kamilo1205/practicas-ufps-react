import { UserActionsMenu } from './UserActionsMenu';

export const DashboardNavbar = () => {
  return (
    <div className="flex bg-red-400 p-4 justify-end">
      <UserActionsMenu />
    </div>
  );
}
