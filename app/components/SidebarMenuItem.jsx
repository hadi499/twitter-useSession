import { useRouter } from "next/navigation";

export default function SidebarMenuItem({ text, Icon, active, onClick }) {
  const router = useRouter();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      router.push("/");
    }
  };

  return (
    <div
      className="hoverEffect flex items-center text-gray-700 justify-center xl:justify-start text-lg space-x-2"
      onClick={handleClick}
    >
      <Icon className="h-7" />
      <span className={`${active && "font-bold"} hidden xl:inline`}>
        {text}
      </span>
    </div>
  );
}
