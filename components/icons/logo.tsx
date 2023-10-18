import clsx from 'clsx';

export default function LogoIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-label={`${process.env.SITE_NAME} logo`}
      viewBox="0 0 24 24"
      {...props}
      className={clsx('h-4 w-4 fill-black dark:fill-white', props.className)}
    >
      <path d="M19.44 15.4179H18.648V17.2768C17.178 18.5143 15.27 19.1946 13.254 19.1946C8.862 19.1946 5.31 15.9696 5.31 11.9946C5.31 8.025 8.862 4.79464 13.254 4.79464C15.372 4.79464 17.37 5.54464 18.87 6.90536L22.608 3.51429C20.1 1.24821 16.782 0 13.242 0C5.88 0 0 5.38929 0 12C0 18.5625 5.82 24 13.242 24C17.034 24 20.712 22.5964 23.502 19.5804C23.382 18.1018 22.698 15.4179 19.44 15.4179ZM18.714 9.39107H12.336V14.1589H19.44C21.45 14.1589 23.07 14.9679 24 16.3982V14.7589C24 11.2661 21.576 9.39107 18.714 9.39107Z" />
    </svg>
  );
}
