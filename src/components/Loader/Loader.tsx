import {
  LogoFill,
  LogoOutline,
  LogoText,
  LogoWrapper,
  MarvelLogoSvg,
  Shimmer,
} from './Loader.styles'

const MARVEL_LOGO_PATH =
  'M631.063,7.184v-61.603H459.644l-28.191,205.803L403.557-54.418H341.74l6.925,54.915c-7.14-14.068-32.449-54.915-88.146-54.915c-0.367-0.024-61.901,0-61.901,0l-0.237,299.974L153.324-54.418l-80.959-0.047L25.753,256.349L25.777-54.42h-77.483l-27.933,174.585l-27.208-174.583h-77.508v337.906h61.036V120.618l27.764,162.866h32.449l27.374-162.866v162.866H81.935l7.14-51.995h47.374l7.116,51.995l115.521,0.071h0.094v-0.071h0.072h0.072V173.799l14.162-2.063l29.319,111.819h0.072h59.61h0.07l-0.024-0.071h0.106h0.072l-38.475-131.057c19.498-14.422,41.513-51.047,35.654-86.084V66.32c0.07,0.474,36.316,217.38,36.316,217.38l71.065-0.216L515.83-22.8v306.285h115.236v-60.773h-54.7v-77.496h54.7V83.518h-54.7V7.184H631.063z M96.265,177.905l16.758-144.461l17.4,144.461H96.265z M273.684,111.201c-4.697,2.278-9.595,3.417-14.363,3.417V5.927c0.083,0,0.179-0.022,0.297-0.022c4.78-0.024,40.419,1.446,40.419,53.774C300.037,87.052,287.916,104.299,273.684,111.201z M754.044,222.665v60.772H641.63V-54.465h60.526v277.13H754.044z'

interface LoaderProps {
  size?: number | string
  animate?: boolean
}

function Loader({ size = '200px', animate = false }: LoaderProps) {
  return (
    <LogoWrapper style={{ width: size }}>
      <MarvelLogoSvg viewBox="-215.19 -86.608 1000 402.473">
        <LogoFill
          x="-215.19"
          y="-86.608"
          width="1000"
          height="402.473"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <LogoOutline
          d={MARVEL_LOGO_PATH}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        />
        <LogoText
          d={MARVEL_LOGO_PATH}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        />
      </MarvelLogoSvg>

      {animate && (
        <Shimmer
          animate={{
            translateX: ['-150%', '250%'],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'linear',
            delay: 1.5,
          }}
        />
      )}
    </LogoWrapper>
  )
}

export default Loader
