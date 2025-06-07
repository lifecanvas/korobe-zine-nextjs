import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>転べ！叫べ！生きろ！</title>
        <meta name="robots" content="noindex" />
      </Head>
      <main className="p-6 space-y-8">
        <h1 className="text-4xl font-bold text-center">転べ！叫べ！生きろ！</h1>
        <section className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-2xl font-semibold">🌱 子どもの目線から</h2>
          <p>ぼくたちは、自由に笑いたい。転んで泥だらけになっても、怒られたくないんだ。</p>
          <p>マスクばっかりで顔が見えなかった。消毒ばかりさせられた。学校に行くのが怖くなった。</p>
          <p>でも、おかしな大人が「転んでいいよ」って言ってくれたとき、なんか救われた。</p>
        </section>
        <section className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-2xl font-semibold">📱 思春期とSNS</h2>
          <p>いいね、フォロワー、通知音。いつの間にか、だれかに見られてないと不安になった。</p>
          <p>ほんとの気持ちは、SNSには書けない。でも「転んでいい」って場所があれば、逃げなくていい気がした。</p>
        </section>
        <section className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-xl font-semibold">🌈 新潟からの実験計画</h2>
          <p>親も、地域の大人も、いろんな人が「子どもが主役の社会って何だろう？」を一緒に考え始めた。</p>
          <p>これはその記録。これはその声。</p>
        </section>
      </main>
    </>
  )
}
