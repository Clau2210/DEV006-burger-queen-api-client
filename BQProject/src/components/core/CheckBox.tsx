
type CheckBoxProps =  { 
  label: string;
  checked?: boolean;
  onChange: (checked: boolean) => void;
}

const CheckBox = ({ label, checked, onChange } : CheckBoxProps) => {

  return (
    <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
      <input           
        className="w-4 h-4 text-orange-600 bg-gray-100 border-gray-300 rounded focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
        type="checkbox"
        checked={checked}
        onChange={e => onChange(e.target.checked)}
      />
      <label
        className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
      >
        {label}
      </label>
    </div>
  )
}

export {
  CheckBox
}