type ButtonProps = {
  label: string;
  type?: 'primary' | 'secondary';
  onClick?: () => void;
  className?: string; 
  overrideDefault?: boolean;
  disabled?: boolean; // Nueva prop
}

const Button = ({ label, type = 'primary', className = '', onClick, overrideDefault = false, disabled = false }: ButtonProps) => {
  // base and type-based classes
  const baseClasses = "m-2 rounded-md border border-transparent px-6 py-3 text-base text-white shadow-sm font-[atma] font-bold";
  const primaryClasses = "bg-[#EE4D39] hover:bg-[#F4AB4D]";
  const secondaryClasses = "bg-[#F4AB4D] hover:bg-[#EE4D39]";
  const disabledClasses = "opacity-50 cursor-not-allowed"; // Clase para cuando el botón esté desactivado

  // merge the classes
  const classes = `${overrideDefault? '' : baseClasses} ${type === 'primary' ? primaryClasses : secondaryClasses} ${disabled ? disabledClasses : ''} ${className}`;

  const handleClick = () => {
    if (!disabled && onClick) { // Agregamos una verificación para no ejecutar si el botón está deshabilitado
      onClick();
    }
  }

  return (
    <button className={classes} onClick={handleClick} disabled={disabled}>
      {label}
    </button>
  );
}

export {
  Button
}