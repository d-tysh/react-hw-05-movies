import { Oval } from "react-loader-spinner"

export const Loader = () => {
    return (
        <Oval
            visible={true}
            height="80"
            width="80"
            color="orangered"
            ariaLabel="oval-loading"
            wrapperStyle={{justifyContent: 'center', margin: '16px'}}
            wrapperClass=""
        />
    )
}