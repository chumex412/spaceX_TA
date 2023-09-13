import { FC, SVGProps } from 'react';
import { CelebrationPropTypes } from '../../../application/domain/entities/profile';

const Celebration = ({
	smiley,
	Frame
}: CelebrationPropTypes<FC<SVGProps<SVGSVGElement> & { title?: string | undefined }>>) => {
	return (
		<article className="py flex gap-x-4">
			<p className="bg-gray-50 p-1">{smiley}</p>
			<Frame />
		</article>
	);
};

export default Celebration;
