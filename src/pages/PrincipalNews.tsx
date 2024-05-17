import BackArrow from '@/components/icons/BackArrow'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function PrincipalNews() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className='h-full flex flex-col items-start py-6 gap-[10px]'
		>
			<div className='flex items-center gap-5 px-10 mb-5'>
				<Link to='/news'>
					<BackArrow />
				</Link>
				<h2 className='text-3xl text-lightGreen line-clamp-2'>Noticias</h2>
			</div>

			<img src='/images/news2.png' alt='glasses' className='w-full -mt-10' />

			<div className='px-10 -mt-10 space-y-5 text-lightGreen font-semibold'>
				<h2 className='text-2xl text-secondaryGreen font-extrabold'>
					Las Rodríguez, la familia liderada por mujeresque lleva cuatro
					generaciones reciclando.
				</h2>
				<p className='text-green font-bold'>
					Iniciaron en 1963 y hoy dirigen una asociación con más de 150
					recicladores que opera en 3 ciudades.
				</p>
				<p>
					En 1963, Clemencia Lara empezó a reciclar en Plaza España, en Bogotá.
					Había llegado desde el municipio de La Palma (Cundinamarca) y
					recolectaba cartón, chatarra quemada, acrílico y polietileno que
					vendía luego por unos pocos pesos. Hoy, su bisnieta, Valeria, quien es
					guardiana ambiental del humedal La Vaca, sueña con ser “ingeniera de
					la chatarra”. Ella, que apenas tiene 10 años, es la cuarta generación
					de una familia liderada por mujeres que ha dedicado, los últimos 60
					años, a recolectar y aprovechar los residuos que se producen en
					Bogotá.
				</p>
				<p>
					Ana Rodríguez es la matriarca. La cara visible. Ella dirige la
					Asociación Recuperando Materiales Reciclables de Kennedy (Remarek). De
					la asociación nacida en 2015 y que administran junto con su familia y
					otros miembros externos, hacen parte 156 personas. En total procesan
					más de 380 toneladas de residuos mensuales, provenientes en su mayoría
					de 80 conjuntos residenciales con los que tienen convenios y cuyo
					trabajo de separación y aprovechamiento se realiza en cuatro bodegas.
				</p>
				<p>
					Ana, sus hermanas, su hija, sus sobrinas, su madre, y su abuela,
					crecieron, literalmente, entre la basura. En la familia son 14 mujeres
					y apenas cuatro hombres. Son ellas las que llevan la batuta. Ana da
					órdenes con voz firme mientras las demás escuchan. Asegura que la del
					reciclador “es una vida divina”, sin olvidar lo difícil y
					desagradecido del oficio.
				</p>
			</div>
			<img src='/images/principal-new.png' alt='noticia' className='my-10' />
			<p className='px-10 text-green font-semibold pb-12'>
				“Hay hombres que dicen que a uno de mujer le queda muy difícil empujar
				un zorro (las carretas en las que se transportan los residuos) o alzar
				un globo (los sacos inmensos de hasta 110 kilos donde se meten los
				residuos). Valeria, mi hija, quiere seguir en esto. Ella me dice 'quiero
				ser ingeniera de la chatarra' y lo puede ser, puede estudiar una
				ingeniería y seguir con esto que hemos creado. Porque en casa le hemos
				enseñado a reciclar”, asegura Ana.
			</p>
		</motion.div>
	)
}
