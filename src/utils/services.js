export const defaultTheme = {
  primaryColor: 'transparent',
  primaryTextColor: '#474f52',
  secondaryColor: 'white',
  backgroundColor: '#d9d6d6',
  statusBarStyle: 'dark-content',
};

export const themes = [
  {
    id: 1,
    primaryColor: '#4e0d3a',
    primaryTextColor: 'white',
    secondaryColor: '#ece4d4',
    backgroundColor: '#4e0d3a',
    statusBarStyle: 'light-content',
    isSelected: true,
  },
  {
    id: 2,
    primaryColor: '#232f34',
    primaryTextColor: '#f9aa33',
    secondaryColor: '#e9eaea',
    backgroundColor: '#bfd9a9',
    statusBarStyle: 'light-content',
    isSelected: false,
  },
  {
    id: 3,
    primaryColor: '#ff3645',
    primaryTextColor: '#000',
    secondaryColor: '#ffeaec',
    backgroundColor: '#45a7bf',
    statusBarStyle: 'light-content',
    isSelected: false,
  },
  {
    id: 4,
    primaryColor: '#679ef2',
    primaryTextColor: '#000',
    secondaryColor: '#eff5fd',
    backgroundColor: '#32786c',
    statusBarStyle: 'light-content',
    isSelected: false,
  },
  {
    id: 5,
    primaryColor: '#e76f51',
    primaryTextColor: '#ebe8dd',
    secondaryColor: '#fcf0ed',
    backgroundColor: '#a8a69e',
    statusBarStyle: 'light-content',
    isSelected: false,
  },
  {
    id: 6,
    primaryColor: '#1d3557',
    primaryTextColor: 'white',
    secondaryColor: '#e8eaee',
    backgroundColor: 'white',
    statusBarStyle: 'light-content',
    isSelected: false,
  },
];

export const fetchSelectedTheme = themes
  ? themes.filter(item => item.isSelected === true)
  : defaultTheme;
