import React, { Fragment, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { registerUser, loginUser, } from '../../redux/reducer';


const Auth = () => {

    const [register, setRegister] = useState(false);
    const [formData, setFormData] = useState({ email: '', password: '' })

    const { email, password } = formData
    const history = useHistory();

    const dispatch = useDispatch();
    const loggedOn = useSelector((state) => {
        return state.user.loggedOn
    });


    useEffect(() => {
        if (loggedOn) {
            history.push('/dash')
        }

    }, [loggedOn, history])

    const onSubmit = e => {
        e.preventDefault();

        if (register) dispatch(registerUser({ email, password }));

        else dispatch(loginUser({ email, password }));
    }

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    // Change styling for login and signup inputs depending on selection
    const registerClass = !register
        ? 'form-switcher-option'
        : 'form-switcher-option form-switcher-option-selected'

    const loginClass = register
        ? 'form-switcher-option'
        : 'form-switcher-option form-switcher-option-selected'

    // Change login card to 'login' or 'signup' depending on which one is selected
    const buttonText = register
        ? 'Signup'
        : 'Login'

    return (
        <Fragment>
            <div className='form-switcher' >
                <div className={loginClass} onClick={e => setRegister(false)} >Login </div>

                <div className={registerClass} onClick={e => setRegister(true)} >Signup</div>
            </div>

            <div className='login-form'>
                <form className='login-form-group' onSubmit={e => onSubmit(e)}>
                    <img className='login-form-logo'
                        src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAzFBMVEUAAAD////Gxsa1tbWlpaXW1tabm5ufn5+rq6vGz9nx8fHk5OTLy8vT09O9vb38/Pza2tq3t7ewuMTAwMB0eX/29vbg4ODr6+uoqKgbGxvIyMiAgIBlZWUnJyeLi4s5OTktLzFTU1Nzc3NtbW1gYGAAABGPlaERERFERESUlJQgICCEhIRMTExpbHiKkZja4OcHAx5qcHVVWFxgZGq6w807PkKnrrcAAA5MT1ctLjN/hY0VFRU1NTVkaG5OUlaiqrMaGSUhICwYFidZW2ZRIuDxAAAIfklEQVR4nO2cCXPiuBKAW7axjS9sDhsDBnMM9xECZDKEJPs2//8/vZYEgcxmMrVVuybx9ldTWEdHqGVZ3WqLASAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgvhPMYqTJImv3Yvr0Z00whrjWL7Snl+7O9kzViP2lkhLr92pTBn44vZ7equTTJNx36iICeGMr92xzOg4qK+td94UzjU+MYLkSn3KmEmJsULrnYqeXypFvcz7cwWUUs0e/KKuZ0dWPdPeXIO0YEUfaanatveQWW+uQuraYf9DiaZf8EYZ9eYqxI7vCkeg1XynVhejM3AcM9NOZYzqKtz8tWuN92pHlsVXxK5XmWTbrSxpNxScBQObVd6vH6OLgMZxEAQfPy9fmK7noUk0GAt/JdEu1SIcpZ5pphn2K0tMtY2PA6tZv94kuZEddXEsjHaG/cqQft2YgmZF1nvr4ZGu7fv+GA6G1s2uY9kR68YAnaAwfHc9PBG4rqughTT1rPqVJX1Nh6TguoUP17t+o1JRJhCb6q98ya+MYfbBcBTlw2kAqRqoqjeGtmdk1K8MGQfBqOMh2sdyulmvm23oNJQ0k35lSRsdn5lqmuoHKyKnZ3AOEDi/EfyCeA18FDTkN+7PgA+B1oN2Qc2mY9kxdZzOwdB13fjdGOCzUEer0A1/6Ul9VVp+BR0EnAb1n4Mko7dx5QGuibgqTtPQzltkbRZ6Yjkw1Z/2Q1214k2m53y/whdOZQCulbeQkhGpYHgB4r0pP1QQxTu8FuC+Cu2nMwO3lDd/ObAMUBWucONNKHHiNBoNxz0PjOdyCjq47DdW9MvRKOlQcThucFmuCJUV+2QIO74gNKHB8hZKcZgBXkHgX1iGKe6RQrsLvZMh1G1JAJVS3qKrCt5VFTdMHP/8EqFjob7+WawTSawAFCtv2yazVMF10ZYaFl6LWzXLsi4cAbsmKamgRLMr9PPfpG050CtZkpp7Cp+rJdSXnRyBjs1KEqaDEubNNvYjF+KThiVmSePQkSW28JJirVY6TgOr1E3cQufDFr8eSRh2wCmdlKwxpzceN6OanBiRpqluzYpesWHuOtfu8z+OU+hBT6h8WvZ48mgFcJ2wjwumxISZkjf3gDtDqJOLRuBCU/9M4QQ6C67rd6Hu5W05AJgrygO0Qr/XCgvuTzgXuHN8CjQ4qGoOX8ObAd7YeqEPCle1cUQ5UTlSh6ZSSaFZz9tugdNT8WEY8WiS1Ne7JDjhDUCvdHkQOo/B9dioo0HsqJAEIkRwgXlBnJiofU/L5yvHlqGjHzDnmwOhbf2IdsbQZjDAffRBq+dxGiC6xneHU7QR2qytidgpj66dMFpt3UilZD5fsSBj05QvTmJ9Ek+k+sYrWg+0uqxvqurho4a+Mqib3BoctP6Drl1SN5vQUqVLMPC83L57BzACVW4Cpu3uw+RyLUTD2THlGpDvMxgwMr3guEkc4bSQBkKYRDQZR59o0GjkLYD0liRQlPPL1LGmCO+gYp63iD3HUXN9JgsHQXWci5nedXgU+WJ3pLkFM+dDAFxLVzkbfx5ndV8DRn3X9/NqFd/QREVfTxeYuIHyj5m+EoZuji3CJQfTDkNlJlyACW6gbf6aaTzhZ5G06W/+Nj/MPR5d9evtbtMO7bA1McMosqIgb9GzjxkbhWMYjYeUeAjRnaTX7lT2zGeeG8mYqhM08/aS+W8wiqdx/m0hQRAE8Z8jra75i+Tqo8hVbx+qgjmavqdqdX02/elaVMQw2qxTUXJb3ckWOLIsvsXUTtRxNthK9RYeZePrDRfeiHSy3nyen3/dFYtLvGyfRa44TIrF4rZYrMKuXOQ8Hz2A263IFlN4RgGu5hKvt3gdyxqefpLJpajk3MUPmLu7E02Un2GHAvybYrzefRbfYrDal/mximJZZFfPkE71VSeNYbvapGm6XMnBgW1xnHJgt1o+rvgmeXW3W/HzWPPVPknTp+IWHlbFWxQxVkvQVyieLFdVWGngyWNb2zswVrvyCjdc1dXjcrW+isZ/pVKDHusBRK7IMt7beg2naYvJcIlSS8XVOv2OqcuaEFmYKJlQqOEz05UH8QoWTJgMrIY2mIyH1x6YCqUACvLwStiACoMmP7Oms3mHfZIX9CPsSFLCLpbkwSLGT+erLOY/XZJLwYTJqIDL9CYyG3VZGxTWEuPV5voMWAUrVOaihvIZD9hDwFrd7txDWabA8eiu5YLD4MAs3noXbPY53szO+J1zWArMFnnGp4PHplyPVJS0mTx6Nzj+zL/Dx6DH7yGrQMz1OdbglCgw2WqdJZ4stKZTFI0iXjqq+ULCxwHUcAwM9jl+5vDHN/558wfciIS8fLvBj+83UuL7zXdx/d/N6W94wbc/j7J/4sL2WvPt5vX67ebm3OQ5JSTw674fr5+Bxcs9sniBzQvPPizu8fN+gYr9WAjDhxk5v0UNZ8or7hc/RMkP/EiOkgA7LOW8vKDA9H6xwYoRSrwI28hT9wvxpSiJU+1l8Rn+J5HxULJMNkPsVbofcnU2SxyD0X7J00/DqhTd74+hsh9D1H03XMRDbv33e1kgiId7PggbrNkMY9jth/sdDB/hdlhN0DNAufUQ6xfDH5shCt4PbzPX+K8My8JGH7Z7THKEwtUyv/W7O1HyfHRlNiJX3ia7LfdynjHNx2hfnu/Kj6f2bqUQjuF+yxe8dXkP+A+Wopgntlj6hGk+FqPyc7bqvsdoeTTRyz2/+8v9k8iJeYB3dY0lm1fhp6UgTodcKq4uhd3YDTfp8ulVKOV/w+/u41DM890axHds9rJxMQ+wqaoY2eoy/XcVJAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAgiK/4P6UPHVjcraSkAAAAASUVORK5CYII='
                        alt='logo'
                    />
                    <input className='input-text'
                        type='email'
                        placeholder='Email Address'
                        name='email'
                        value={email}
                        onChange={e => handleChange(e)}
                    //uncomment this later if I want to,    required
                    />
                    <input className='input-text'
                        type='password'
                        placeholder='Password'
                        name='password'
                        value={password}
                        onChange={e => handleChange(e)}
                    //uncomment this later if I want to,    required
                    />
                    <input className='input-submit'
                        type='submit' /* <= makes it a button*/
                        value={buttonText} />
                </form>
            </div>
        </Fragment>
    )
}



export default Auth;