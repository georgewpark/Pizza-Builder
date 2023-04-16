type ToppingIconProps = {
  iconType: string
}

function ToppingIcon({ iconType }: ToppingIconProps) {
  return (
    <span className={`pizza-options__topping-icon pizza-options__topping-icon--${iconType.split(' ')[0]}`} aria-hidden='true'>
      {iconType.charAt(0).toUpperCase()}
    </span>
  )
}

export default ToppingIcon