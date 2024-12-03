import { Product } from '@/schemas';
import { formatPrice } from '@/utils';
import Image from 'next/image';
import AddProductButton from './AddProductButton';
export default function ProductCard({ product }: { product: Product }) {
	return (
		
		<div className="rounded bg-white shadow relative p-5">
			<div>
				<div className="relative w-full aspect-square">
					<Image
						src={`${process.env.API_URL}/img/${product.image}`}
						alt={`Imagen del producto ${product.name}`}
						fill
						sizes="(max-width: 768px) 100vw, 400px"
						className="object-cover rounded"
						priority
					/>
				</div>
				<div className="p-3 space-y-2">
					<h3 className="text-xl font-bold text-gray-600">{product.name}</h3>
					<p className="text-gray-500">Disponibles: {product.inventory}</p>
					<p className="text-2xl font-extrabold  text-gray-900">
						{formatPrice(product.price)}
					</p>
				</div>
			</div>
			<AddProductButton product={product} />
		</div>
	);
}
