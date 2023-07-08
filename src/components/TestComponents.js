import React from 'react'
import Button from './ui/button/Button'
import TextField from './ui/text-field/TextField';

const TestComponents = () => {

    return (
        <div className='flex-center flex-column'>
            <div className='m10'>Components</div>
            {/* Button */}
            <Button className='m10' variant="primary">Primary</Button>
            <Button className='m10' variant="secondary">Secondary</Button>
            <Button className='m10'>Default</Button>
            {/* TextField */}
            <TextField className="m10 custom" placeholder="Search"></TextField>
            <TextField className="m10 custom" value="disabled button" disabled></TextField>
        </div>
    )
}

export default TestComponents