import { useField } from "formik";

const CheckBox: React.FC<{type: string}> = ({children, type, ...props}) =>{
    const [field, meta] = useField(props);
    return(
        <div>
            <label htmlFor="">
                <input type="checkbox" {...field} {...props} />
                {children}
            </label>
            {meta.touched && meta.error ? <div>{meta.error}</div> : null }
        </div>
    )
}

export default CheckBox;