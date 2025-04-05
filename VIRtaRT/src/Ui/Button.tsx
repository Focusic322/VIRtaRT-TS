import { Link } from 'react-router'

type ButtonProps = {
	title: string
	link?: string
	onClick?: () => void
}

export default function Button({ title, link, onClick }: ButtonProps) {
	return (
		<div>
			{link ? (
				<button
					onClick={onClick}
					className='pt-serif-regular bg-darkBlue text-white text-lg rounded-xl pt-2 pb-2 pr-3 pl-3 hover:opacity-90 duration-700 max-md:w-[100%]'
				>
					<Link to={link}>{title}</Link>
				</button>
			) : (
				<button
					onClick={onClick}
					className='pt-serif-regular bg-darkBlue text-white text-lg rounded-xl pt-2 pb-2 pr-3 pl-3 hover:opacity-90 duration-700 max-md:w-[100%]'
				>
					{title}
				</button>
			)}
		</div>
	)
}
