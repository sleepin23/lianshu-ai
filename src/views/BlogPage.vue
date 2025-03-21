<template>
  <div class="blog-page">
    <header class="header">
      <div class="logo">
        <h1>TechBlog</h1>
      </div>
      <nav>
        <router-link to="/" class="nav-link">首页</router-link>
        <router-link to="/product" class="nav-link">产品</router-link>
        <router-link to="/blog" class="nav-link active">博客</router-link>
        <router-link to="/dashboard" class="nav-link">仪表盘</router-link>
      </nav>
    </header>

    <main class="blog-content">
      <article class="blog-post">
        <div class="blog-header">
          <h1>人工智能在2025年的发展趋势与应用前景</h1>
          <div class="blog-meta">
            <div class="author">
              <img src="https://via.placeholder.com/40" alt="作者头像" class="author-avatar" />
              <span class="author-name">张明</span>
            </div>
            <div class="post-info">
              <span class="post-date">2025年3月15日</span>
              <span class="post-category">人工智能</span>
              <span class="read-time">阅读时间：8分钟</span>
            </div>
          </div>
        </div>

        <div class="blog-featured-image">
          <div class="image-placeholder">文章特色图片</div>
        </div>

        <div class="blog-body">
          <p class="lead">
            随着技术的飞速发展，人工智能已经从实验室走向了各行各业的实际应用。2025年，我们将看到AI在更多领域的深入应用与创新突破。
          </p>

          <h2>生成式AI的新突破</h2>
          <p>
            生成式AI在过去几年取得了令人瞩目的进展。从文本生成到图像创作，再到音乐和视频内容的自动生成，这些技术正在改变创意产业的工作方式。
            2025年，我们预计将看到以下几个方面的重要发展：
          </p>
          <ul>
            <li>多模态AI模型的普及，能够同时理解和生成文本、图像、音频和视频</li>
            <li>更高效的训练方法，降低模型训练的计算资源需求</li>
            <li>更强的上下文理解能力，使AI生成的内容更加连贯和有意义</li>
            <li>专业领域知识的深度融合，如医学、法律和金融等专业AI助手</li>
          </ul>

          <h2>AI在医疗健康领域的应用</h2>
          <p>
            医疗健康是AI应用最有前景的领域之一。2025年，我们将看到更多AI驱动的医疗解决方案：
          </p>
          <p>
            在疾病诊断方面，AI已经能够在某些领域达到或超过人类医生的水平。例如，在皮肤癌、糖尿病视网膜病变和肺癌等疾病的早期检测中，
            AI系统展现出了优异的性能。未来，这些系统将变得更加精确，并扩展到更多疾病类型。
          </p>
          <p>
            个性化医疗也是一个重要趋势。通过分析患者的基因数据、生活方式和医疗历史，AI可以帮助医生制定更加个性化的治疗方案，
            提高治疗效果并减少副作用。
          </p>

          <blockquote>
            "人工智能不是要取代医生，而是要成为医生的得力助手，帮助他们做出更好的决策，提供更优质的医疗服务。"
            <cite>— 李华，医学AI研究专家</cite>
          </blockquote>

          <h2>自动驾驶技术的成熟</h2>
          <p>
            自动驾驶技术在2025年将迎来重要的里程碑。随着感知技术、决策算法和车辆控制系统的不断完善，
            我们将看到更多L3和L4级别的自动驾驶汽车上路。这些车辆能够在特定场景下实现完全自动驾驶，大大提高出行的安全性和便利性。
          </p>
          <p>
            同时，自动驾驶技术也将扩展到更多的交通工具中，如公共交通、物流配送和特种车辆等。这将带来交通效率的提升和碳排放的减少。
          </p>

          <h2>AI伦理与监管的发展</h2>
          <p>
            随着AI技术的广泛应用，伦理问题和监管需求也日益凸显。2025年，我们预计将看到更多国家和地区出台AI监管框架，
            以确保AI技术的发展符合人类的价值观和社会需求。
          </p>
          <p>
            这些监管框架将涉及数据隐私、算法透明度、责任归属和公平性等多个方面，旨在平衡技术创新与社会保障之间的关系。
          </p>

          <h2>结论</h2>
          <p>
            2025年，人工智能将继续以惊人的速度发展，并在各个领域展现出巨大的应用潜力。无论是生成式AI、医疗健康、自动驾驶还是其他领域，
            AI技术都将为我们的生活和工作带来深刻的变革。
          </p>
          <p>
            同时，我们也需要关注AI发展过程中的伦理和社会问题，确保技术发展的方向与人类的福祉相一致。只有这样，
            我们才能充分发挥AI技术的潜力，创造一个更美好的未来。
          </p>
        </div>

        <div class="blog-tags">
          <span class="tag">人工智能</span>
          <span class="tag">技术趋势</span>
          <span class="tag">医疗AI</span>
          <span class="tag">自动驾驶</span>
          <span class="tag">AI伦理</span>
        </div>

        <div class="blog-share">
          <span>分享文章：</span>
          <div class="share-buttons">
            <button class="share-button">微信</button>
            <button class="share-button">微博</button>
            <button class="share-button">QQ</button>
            <button class="share-button">复制链接</button>
          </div>
        </div>

        <div class="author-bio">
          <img src="https://via.placeholder.com/80" alt="作者头像" class="author-avatar-large" />
          <div class="author-info">
            <h3>关于作者</h3>
            <h4>张明</h4>
            <p>
              张明是一位资深技术专家和科技作家，专注于人工智能和机器学习领域。他拥有10年以上的行业经验，
              曾在多家知名科技公司担任技术顾问。他的文章和研究成果被广泛引用和讨论。
            </p>
          </div>
        </div>
      </article>

      <section class="related-posts">
        <h2>相关文章</h2>
        <div class="post-grid">
          <div class="post-card">
            <div class="post-card-image">文章图片</div>
            <div class="post-card-content">
              <span class="post-category">机器学习</span>
              <h3>深度学习框架比较：PyTorch vs TensorFlow 2025版</h3>
              <p class="post-excerpt">
                本文对比了两大主流深度学习框架的最新特性和性能表现...
              </p>
              <div class="post-meta">
                <span class="post-date">2025年2月28日</span>
                <span class="read-time">6分钟阅读</span>
              </div>
            </div>
          </div>
          <div class="post-card">
            <div class="post-card-image">文章图片</div>
            <div class="post-card-content">
              <span class="post-category">AI应用</span>
              <h3>AI在内容创作中的应用：机遇与挑战</h3>
              <p class="post-excerpt">
                生成式AI正在改变内容创作的方式，本文探讨了这一趋势带来的影响...
              </p>
              <div class="post-meta">
                <span class="post-date">2025年3月5日</span>
                <span class="read-time">7分钟阅读</span>
              </div>
            </div>
          </div>
          <div class="post-card">
            <div class="post-card-image">文章图片</div>
            <div class="post-card-content">
              <span class="post-category">技术前沿</span>
              <h3>量子计算与AI：下一代智能计算的融合</h3>
              <p class="post-excerpt">
                量子计算有望解决传统计算难以应对的AI问题，本文介绍了最新研究进展...
              </p>
              <div class="post-meta">
                <span class="post-date">2025年3月10日</span>
                <span class="read-time">9分钟阅读</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="comments">
        <h2>评论 (12)</h2>
        <div class="comment-form">
          <textarea placeholder="写下您的评论..." class="comment-input"></textarea>
          <button class="comment-submit">发表评论</button>
        </div>

        <div class="comment-list">
          <div class="comment">
            <div class="comment-avatar">
              <img src="https://via.placeholder.com/40" alt="评论者头像" />
            </div>
            <div class="comment-content">
              <div class="comment-header">
                <span class="comment-author">李小明</span>
                <span class="comment-date">2025年3月15日 14:30</span>
              </div>
              <p class="comment-text">
                非常棒的文章！对AI在医疗领域的分析特别有见地。我在一家医疗科技公司工作，确实看到了很多AI应用正在改变传统医疗模式。
              </p>
              <div class="comment-actions">
                <button class="comment-reply">回复</button>
                <button class="comment-like">点赞 (5)</button>
              </div>
            </div>
          </div>

          <div class="comment">
            <div class="comment-avatar">
              <img src="https://via.placeholder.com/40" alt="评论者头像" />
            </div>
            <div class="comment-content">
              <div class="comment-header">
                <span class="comment-author">王芳</span>
                <span class="comment-date">2025年3月15日 16:45</span>
              </div>
              <p class="comment-text">
                关于AI伦理的部分讨论得很到位。技术发展必须与伦理监管同步，否则可能带来意想不到的社会问题。
              </p>
              <div class="comment-actions">
                <button class="comment-reply">回复</button>
                <button class="comment-like">点赞 (3)</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer>
      <div class="footer-content">
        <div class="footer-section">
          <h3>关于我们</h3>
          <p>TechBlog是一个专注于技术前沿和创新的博客平台，提供高质量的科技内容和深度分析。</p>
        </div>
        <div class="footer-section">
          <h3>分类</h3>
          <ul>
            <li><a href="#">人工智能</a></li>
            <li><a href="#">Web开发</a></li>
            <li><a href="#">移动应用</a></li>
            <li><a href="#">数据科学</a></li>
            <li><a href="#">云计算</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h3>订阅更新</h3>
          <div class="subscribe-form">
            <input type="email" placeholder="您的邮箱地址" class="subscribe-input" />
            <button class="subscribe-button">订阅</button>
          </div>
        </div>
      </div>
      <div class="copyright">
        <p>&copy; 2025 TechBlog. 保留所有权利.</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import AiButton from '../components/AiButton.vue';
import AiPanel from '../components/AiPanel.vue';

const isAiPanelOpen = ref(false);
</script>

<style scoped>
.blog-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid #eaeaea;
}

.logo h1 {
  font-size: 24px;
  color: #333;
  font-weight: 700;
}

nav {
  display: flex;
  gap: 20px;
}

.nav-link {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  transition: color 0.2s;
}

.nav-link:hover, .nav-link.active, .router-link-active {
  color: #4a6cf7;
}

.blog-content {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 0;
}

.blog-header {
  margin-bottom: 30px;
}

.blog-header h1 {
  font-size: 36px;
  line-height: 1.3;
  margin-bottom: 20px;
  color: #333;
}

.blog-meta {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}

.author {
  display: flex;
  align-items: center;
  gap: 10px;
}

.author-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
}

.author-name {
  font-weight: 500;
}

.post-info {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  color: #666;
  font-size: 14px;
}

.blog-featured-image {
  margin-bottom: 30px;
  border-radius: 8px;
  overflow: hidden;
  height: 400px;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-placeholder {
  color: #999;
  font-size: 18px;
}

.blog-body {
  margin-bottom: 40px;
}

.lead {
  font-size: 20px;
  line-height: 1.6;
  color: #555;
  margin-bottom: 30px;
}

.blog-body h2 {
  font-size: 28px;
  margin: 40px 0 20px;
  color: #333;
}

.blog-body p {
  margin-bottom: 20px;
  line-height: 1.8;
}

.blog-body ul {
  margin-bottom: 20px;
  padding-left: 20px;
}

.blog-body ul li {
  margin-bottom: 10px;
  line-height: 1.6;
}

blockquote {
  margin: 30px 0;
  padding: 20px 30px;
  border-left: 4px solid #4a6cf7;
  background-color: #f8f9fa;
  font-style: italic;
  color: #555;
}

blockquote cite {
  display: block;
  margin-top: 10px;
  font-size: 14px;
  font-style: normal;
  color: #666;
}

.blog-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 30px;
}

.tag {
  background-color: #f0f2f5;
  color: #4a6cf7;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 14px;
}

.blog-share {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 40px;
  padding-bottom: 40px;
  border-bottom: 1px solid #eaeaea;
}

.share-buttons {
  display: flex;
  gap: 10px;
}

.share-button {
  background-color: #f0f2f5;
  border: none;
  padding: 8px 15px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.share-button:hover {
  background-color: #e0e3e9;
}

.author-bio {
  display: flex;
  gap: 20px;
  padding: 30px;
  background-color: #f8f9fa;
  border-radius: 8px;
  margin-bottom: 40px;
}

.author-avatar-large {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
}

.author-info h3 {
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
}

.author-info h4 {
  font-size: 18px;
  margin-bottom: 10px;
  color: #333;
}

.related-posts {
  margin-bottom: 60px;
}

.related-posts h2 {
  font-size: 24px;
  margin-bottom: 30px;
  color: #333;
}

.post-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 30px;
}

.post-card {
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s, box-shadow 0.3s;
}

.post-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}

.post-card-image {
  height: 150px;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
}

.post-card-content {
  padding: 20px;
}

.post-category {
  display: inline-block;
  background-color: #f0f2f5;
  color: #4a6cf7;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  margin-bottom: 10px;
}

.post-card h3 {
  font-size: 18px;
  margin-bottom: 10px;
  line-height: 1.4;
}

.post-excerpt {
  color: #666;
  font-size: 14px;
  margin-bottom: 15px;
}

.post-meta {
  display: flex;
  justify-content: space-between;
  color: #999;
  font-size: 12px;
}

.comments {
  margin-top: 60px;
}

.comments h2 {
  font-size: 24px;
  margin-bottom: 30px;
  color: #333;
}

.comment-form {
  margin-bottom: 40px;
}

.comment-input {
  width: 100%;
  height: 120px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  resize: none;
  margin-bottom: 15px;
  font-family: inherit;
  font-size: 14px;
}

.comment-input:focus {
  outline: none;
  border-color: #4a6cf7;
}

.comment-submit {
  background-color: #4a6cf7;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.2s;
}

.comment-submit:hover {
  background-color: #3a5bd9;
}

.comment-list {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.comment {
  display: flex;
  gap: 15px;
}

.comment-avatar img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
}

.comment-content {
  flex: 1;
}

.comment-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.comment-author {
  font-weight: 500;
  color: #333;
}

.comment-date {
  font-size: 12px;
  color: #999;
}

.comment-text {
  line-height: 1.6;
  margin-bottom: 10px;
}

.comment-actions {
  display: flex;
  gap: 15px;
}

.comment-reply, .comment-like {
  background: none;
  border: none;
  color: #666;
  font-size: 14px;
  cursor: pointer;
  transition: color 0.2s;
}

.comment-reply:hover, .comment-like:hover {
  color: #4a6cf7;
}

footer {
  background-color: #f8f9fa;
  border-top: 1px solid #eaeaea;
  padding: 60px 0 20px;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
  margin-bottom: 40px;
}

.footer-section h3 {
  font-size: 18px;
  margin-bottom: 20px;
  color: #333;
}

.footer-section p {
  color: #666;
  line-height: 1.6;
}

.footer-section ul {
  list-style: none;
}

.footer-section ul li {
  margin-bottom: 10px;
}

.footer-section ul li a {
  text-decoration: none;
  color: #666;
  transition: color 0.2s;
}

.footer-section ul li a:hover {
  color: #4a6cf7;
}

.subscribe-form {
  display: flex;
  gap: 10px;
}

.subscribe-input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
}

.subscribe-input:focus {
  outline: none;
  border-color: #4a6cf7;
}

.subscribe-button {
  background-color: #4a6cf7;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.subscribe-button:hover {
  background-color: #3a5bd9;
}

.copyright {
  text-align: center;
  padding-top: 20px;
  border-top: 1px solid #eaeaea;
  color: #666;
}

/* 暗黑模式样式 */
@media (prefers-color-scheme: dark) {
  .header {
    border-bottom: 1px solid #333;
  }

  .logo h1 {
    color: #e0e0e0;
  }

  .nav-link {
    color: #e0e0e0;
  }

  .nav-link:hover, .nav-link.active, .router-link-active {
    color: #5d7bf9;
  }

  .blog-header h1 {
    color: #e0e0e0;
  }

  .post-info {
    color: #aaa;
  }

  .blog-featured-image {
    background-color: #1e1e1e;
  }

  .image-placeholder {
    color: #777;
  }

  .lead {
    color: #bbb;
  }

  .blog-body h2 {
    color: #e0e0e0;
  }

  blockquote {
    background-color: #1a1a1a;
    border-left: 4px solid #5d7bf9;
    color: #bbb;
  }

  blockquote cite {
    color: #aaa;
  }

  .tag {
    background-color: #252525;
    color: #5d7bf9;
  }

  .blog-share {
    border-bottom: 1px solid #333;
  }

  .share-button {
    background-color: #252525;
    color: #e0e0e0;
  }

  .share-button:hover {
    background-color: #333;
  }

  .author-bio {
    background-color: #1a1a1a;
  }

  .author-info h3 {
    color: #aaa;
  }

  .author-info h4 {
    color: #e0e0e0;
  }

  .related-posts h2 {
    color: #e0e0e0;
  }

  .post-card {
    background-color: #1e1e1e;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  }

  .post-card:hover {
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.3);
  }

  .post-card-image {
    background-color: #252525;
    color: #777;
  }

  .post-category {
    background-color: #252525;
    color: #5d7bf9;
  }

  .post-excerpt {
    color: #aaa;
  }

  .post-meta {
    color: #777;
  }

  .comments h2 {
    color: #e0e0e0;
  }

  .comment-input {
    background-color: #1e1e1e;
    border: 1px solid #333;
    color: #e0e0e0;
  }

  .comment-input:focus {
    border-color: #5d7bf9;
  }

  .comment-submit {
    background-color: #5d7bf9;
  }

  .comment-submit:hover {
    background-color: #4a6cf7;
  }

  .comment-author {
    color: #e0e0e0;
  }

  .comment-date {
    color: #777;
  }

  .comment-reply, .comment-like {
    color: #aaa;
  }

  .comment-reply:hover, .comment-like:hover {
    color: #5d7bf9;
  }

  footer {
    background-color: #1a1a1a;
    border-top: 1px solid #333;
  }

  .footer-section h3 {
    color: #e0e0e0;
  }

  .footer-section p {
    color: #aaa;
  }

  .footer-section ul li a {
    color: #aaa;
  }

  .footer-section ul li a:hover {
    color: #5d7bf9;
  }

  .subscribe-input {
    background-color: #1e1e1e;
    border: 1px solid #333;
    color: #e0e0e0;
  }

  .subscribe-input:focus {
    border-color: #5d7bf9;
  }

  .subscribe-button {
    background-color: #5d7bf9;
  }

  .subscribe-button:hover {
    background-color: #4a6cf7;
  }

  .copyright {
    border-top: 1px solid #333;
    color: #aaa;
  }
}
</style>