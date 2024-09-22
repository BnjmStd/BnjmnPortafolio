
export default function Arrow({ width = '24', height = '24', fill = 'white' }) {
    return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width} height={height}
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke={fill}
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
    >
        <>
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 6l6 6l-6 6" />
        </>
    </svg>
    )
}
