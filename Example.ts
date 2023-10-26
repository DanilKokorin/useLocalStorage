import useLocalStorage from './useLocalStorage'

const Component = () => {
  const [theme, setTheme] = useLocalStorage('theme', 'dark')

  return ( 
    <button
      onClick={() => (theme === 'light' ? setTheme('dark') : setTheme('light'))}>
      Toggle theme
    </button>
  )
}

export default useLocalStorage
