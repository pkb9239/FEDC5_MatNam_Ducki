interface CloseFilledIconProps extends React.ComponentProps<'svg'> {}

export default function CloseFilledIcon(props: CloseFilledIconProps) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"
        fill="#D8D8D8"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.87868 5.17157C5.68342 4.9763 5.36684 4.9763 5.17157 5.17157C4.97631 5.36683 4.97631 5.68341 5.17157 5.87867L7.2929 8L5.17158 10.1213C4.97631 10.3166 4.97632 10.6332 5.17158 10.8284C5.36684 11.0237 5.68342 11.0237 5.87868 10.8284L8.00001 8.70711L10.1213 10.8284C10.3166 11.0237 10.6332 11.0237 10.8284 10.8284C11.0237 10.6332 11.0237 10.3166 10.8284 10.1213L8.70712 8L10.8284 5.87869C11.0237 5.68343 11.0237 5.36685 10.8284 5.17158C10.6332 4.97632 10.3166 4.97632 10.1213 5.17158L8.00001 7.2929L5.87868 5.17157Z"
        fill="#010F07"
      />
    </svg>
  );
}
