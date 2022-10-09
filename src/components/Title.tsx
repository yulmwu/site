import * as Components from './index'
import useWebAnimations, { bounceInLeft, headShake } from '@wellyshen/use-web-animations'

export default () => {
    const { ref, animate } = useWebAnimations<HTMLParagraphElement>({
        ...bounceInLeft,
        animationOptions: {
            duration: 700,
        },
    })

    return (
        <div className='inline-block'>
            <div ref={ref} onClick={() => animate(headShake)}>
                <Components.Text className='text-4xl sm:text-6xl' uppercase>
                    ky0422
                </Components.Text>
            </div>
            <div className='pt-3'>
                <Components.Text className='text-xl sm:text-2xl pr-1.5' color='text-blue-500'>
                    다람쥐
                </Components.Text>
                <Components.Text className='text-xl sm:text-2xl pr-1.5'>헌</Components.Text>
                <Components.Text className='text-xl sm:text-2xl' color='text-red-500'>
                    쳇바퀴
                </Components.Text>
                <Components.Text className='text-xl sm:text-2xl'>에 타고파</Components.Text>
            </div>
        </div>
    )
}
