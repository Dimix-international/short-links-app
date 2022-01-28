import {Button} from '../Button';

import classes from './Form.module.scss';
import {useForm} from "react-hook-form";
import {useCreateShortLink} from "../../hooks/react-query/create-short-link";
import {useShortLink} from "../../hooks/short-link/short-link";

const Form = () => {
    const {
        register,
        formState: {errors},
        reset,
        handleSubmit,
    } = useForm({
        mode: 'onSubmit'
    });

    const {setUtl, isLoading} = useCreateShortLink();

    const sendData = ({Url}) => {
        setUtl(Url)
        reset();
    }

    return (
        <section className={classes.section}>
            <div className="container">
                <form
                    className={classes.form}
                    autoComplete='off'
                    onSubmit={handleSubmit(sendData)}
                >
                    <input
                        type="url"
                        placeholder="Shorten a link here..."
                        className={classes.input}
                        {...register('Url', {
                            required: 'Please add a link',
                            pattern: {
                                value: /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g,
                                message: 'Please enter a valid url'
                            }
                        })}
                        style={{
                            outlineColor: errors.Url ? 'var(--secondary-300)' : 'currentColor',
                            outlineWidth: errors.Url ? '4px' : '1px',
                        }}
                        disabled={isLoading}
                    />
                    <Button
                        variant="square"
                        type="submit"
                        size="medium"
                        disabled={isLoading}
                    >Shorten it!</Button>
                    {
                        errors.Url && <div className={classes.error}>
                            {errors.Url.message}
                        </div>
                    }
                </form>
            </div>
        </section>
    )
}

export {Form};
