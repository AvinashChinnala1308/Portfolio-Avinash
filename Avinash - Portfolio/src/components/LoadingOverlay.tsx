import { ClipLoader } from 'react-spinners'

export const LoadingOverlay = () => {
    return (
        <div className='absolute z-40 w-screen h-screen flex justify-center items-center bg-black opacity-50'>
            <ClipLoader color='white' />
        </div>
    )
}
