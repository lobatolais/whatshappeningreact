import ContentLoader from "react-content-loader"

export const Loader = () => {
  return (
    <ContentLoader
      speed={2}
      width={300}
      height={160}
      viewBox="0 0 300 160"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="56" rx="3" ry="3" width="410" height="6" />
      <rect x="0" y="72" rx="3" ry="3" width="380" height="6" />
      <rect x="0" y="88" rx="3" ry="3" width="178" height="6" />
      <circle cx="20" cy="20" r="20" />
    </ContentLoader>
  )
}