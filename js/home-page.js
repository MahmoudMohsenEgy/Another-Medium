const main_content = document.querySelector("#maincontent");
const home = document.querySelector("#home");
const options = document.querySelectorAll("#options li");

const get_data = async (option) => {
  const data = fetch(`http://localhost:3000/draft/${option}`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    method: "GET",
    body: JSON.stringify(),
  })
    .then((response) => response.json())
    .then((r) => console.log(r))
    .catch((e) => console.error(e));
};

const getTimeTxt = (time) => {
  const months = [
    "jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const getmon = (n) => months[n];
  const artDate = new Date(time);
  const timeinyears = (Date.now() - time) / (1000 * 60 * 60 * 24 * 365);
  const timeinMonths = timeinyears * 12;
  const timeinDays = timeinMonths * 30;
  const timeinHrs = timeinDays * 24;
  const timeinMins = timeinHrs * 60;

  const timetxt =
    timeinyears > 1
      ? `${getmon(
          artDate.getMonth()
        )} ${artDate.getDate()}, ${artDate.getFullYear()}`
      : timeinMonths > 1
      ? `${getmon(artDate.getMonth())} ${artDate.getDate()}`
      : timeinDays > 1
      ? timeinDays.toFixed(0) + " days ago"
      : timeinHrs > 1
      ? timeinHrs.toFixed(0) + " hrs ago"
      : timeinMins.toFixed(0) + " min ago";
  return timetxt;
};

const createDraft = (id, title, time, author, content, img) => {
  const timetxt = getTimeTxt(time);
  const semiContent = content.slice(0, 300);

  const post = document.createElement("div");
  post.innerHTML =
    //   <a href="/post/${id}"><b style="color:black;font-size:16px">${title}</b></a>
    `
  <div class="renderPost">
    <div style="display:flex;flex-direction:row">
    <div>
    <img src="${
      author.profilePicture
    }" alt="Author's profile picture" style="width:20px;height:20px;overflow:hidden;border-radius:50px"></img>
    <span style="font-size:13px;margin:5px">${
      author.name
    }<span style="opacity:50%;margin:0 5px 0 "><b>·</b> ${timetxt}</span></span>
    <br>
    <br>
    <a href="home-page.html?article=${title.split(" ").join("-")}">
    <b style="color:black;font-size:22px;">${title}</b>
    </a>
    <br>
    <p> ${semiContent} </p>  
    </div>
        <img src="${img}" alt="post's image" style='width:10em;height:10em;margin:auto 1em'></img>
    </div>
    <hr>
  </div>
  `;
  post.style.font = "14px Arial, sans-serif";
  post.style.marginTop = "20px";
  return post;
};
const estTime = (article) => {
  return ((article.length * 0.3) / 60).toFixed(0) + " mins";
};

const renderOnePost = (id, title, time, author, content, img) => {
  const timetxt = getTimeTxt(time);
  const post = document.createElement("div");
  post.style =
    "padding:1em;display:flex;flex-direction:column; align-items:center;font:sans-serif";
  post.innerHTML = `
    <div style="display:flex;flex-direction:row;align-self:start;margin:2em 0;align-items:center;">
      <img src="${
        author.profilePicture
      }" alt="userphoto" class="rounded-circle" style="width: 150px;height:150px"/>
      <div style="display: flex; flex-direction: column; margin-left: 30px;">
          <h3><b class="authorName">${author.name}</b></h3>
          <small id="date">${timetxt} <b>·</b> ${estTime(content)} read</small>
          <small></small>
      </div> 
    </div>
    <Strong style="font-size:2rem;">${title}</Strong>
    <br>
    <pre class="container" style="font-family:sans-serif">${content}</pre>
  `;
  return post;
};

const posts = [
  {
    id: "34rtyui8vds7",
    author: {
      name: "Ahmed 7adod",
      profilePicture:
        "http://www.leitner-hof.com/files/layout/fullpage/examples/imgs/bg1.jpg",
      followers: 200,
    },
    img: "http://www.leitner-hof.com/files/layout/fullpage/examples/imgs/bg4.jpg",
    title:
      "this is just one post not a lorem text it's about machine learning 1",
    content: `machine learning, there is a theorem called “no free lunch.” In short, it states that no single algorithm works for all problems, especially in supervised learning (ie, predictive modeling).
For example, you can’t say that neural networks are always better than decision trees, and vice versa. There are many factors at work, such as the size and structure of the data set.
Therefore, you should experiment with a variety of different algorithms for specific problems and set aside a data “test set” to evaluate performance and select winners.
Of course, the algorithm you try must suit your problem, that is, choose the right machine learning task. For example, if you need to clean the house, you may use a vacuum cleaner, broom or mop, but you won’t take out the shovel and start digging.
Machine learning overview
Machine learning is a branch of artificial intelligence, a science that researches machines to acquire new knowledge and new skills and to identify existing knowledge. The precise definition of machine learning is:
It’s a computer program learning from experience E with respect to some task T and some performance measure P, if its performance on T as measured by P, improves with E : Tom Mitchell 1998
Machine learning has been widely used in data mining, computer vision, natural language processing, biometrics, search engines, medical diagnostics, detection of credit card fraud, securities market analysis, DNA sequence sequencing, speech and handwriting recognition, strategy games and robotics.
Machine learning algorithm

(Image courtesy of blogs.sas.com)
Machine learning algorithm classification
According to the way of learning, machine learning mainly includes:
Supervised learning: Input data is tagged. Supervised learning establishes a learning process, compares the predicted results with the actual results of the “training data” (ie, input data), and continuously adjusts the predictive model until the predicted results of the model reach an expected accuracy, such as classification and regression problems. . Common algorithms include decision trees, Bayesian classification, least squares regression, logistic regression, support vector machines, neural networks, and so on.
Unsupervised learning: Input data has no tags, but algorithms to infer the intrinsic links of data, such as clustering and association rule learning. Common algorithms include independent component analysis, K-Means and Apriori algorithms.
Semi-supervised learning: input data part tags, is an extension of supervised learning, often used for classification and regression. Common algorithms include graph theory inference algorithms, Laplacian support vector machines, and so on.
Reinforcement learning: Input data as feedback to the model, emphasizing how to act based on the environment to maximize the expected benefits. The difference between supervised learning is that it does not require the correct input/output pairs and does not require precise correction of sub-optimal behavior. Reinforcement learning is more focused on online planning and requires a balance between exploration (in the unknown) and compliance (existing knowledge).
According to the function to divide, machine learning, including:
Regression algorithm
Linear regression
Logistic regression
Multiple Adaptive Regression (MARS)
Local scatter smoothing estimate (LOESS)
Instance-based learning algorithm
K — proximity algorithm (kNN)
Learning vectorization (LVQ)
Self-Organizing Mapping Algorithm (SOM)
Local Weighted Learning Algorithm (LWL)
Regularization algorithm
Ridge Regression
LASSO（Least Absolute Shrinkage and Selection Operator）
Elastic Net
Minimum Angle Regression (LARS)
Decision tree algorithm
Classification and Regression Tree (CART)
ID3 algorithm (Iterative Dichotomiser 3)
C4.5 and C5.0
CHAID（Chi-squared Automatic Interaction Detection(）
Random Forest
Multivariate Adaptive Regression Spline (MARS)
Gradient Boosting Machine (GBM)
Bayesian algorithm
Naive Bayes
Gaussian Bayes
Polynomial naive Bayes
AODE（Averaged One-Dependence Estimators）
Bayesian Belief Network
Kernel-based algorithm
Support vector machine (SVM)
Radial Basis Function (RBF)
Linear Discriminate Analysis (LDA)
Clustering Algorithm
K — mean
K — medium number
EM algorithm
Hierarchical clustering
Association rule learning
Apriori algorithm
Eclat algorithm
Neural Networks
sensor
Backpropagation algorithm (BP)
Hopfield network
Radial Basis Function Network (RBFN)
Deep learning
Deep Boltzmann Machine (DBM)
Convolutional Neural Network (CNN)
Recurrent neural network (RNN, LSTM)
Stacked Auto-Encoder
Dimensionality reduction algorithm
Principal Component Analysis (PCA)
Principal component regression (PCR)
Partial least squares regression (PLSR)
Salmon map
Multidimensional scaling analysis (MDS)
Projection pursuit method (PP)
Linear Discriminant Analysis (LDA)
Mixed Discriminant Analysis (MDA)
Quadratic Discriminant Analysis (QDA)
Flexible Discriminant Analysis (FDA)
Integrated algorithm
Boosting
Bagging
AdaBoost
Stack generalization (mixed)
GBM algorithm
GBRT algorithm
Random forest
Other algorithms
Feature selection algorithm
Performance evaluation algorithm
Natural language processing
Computer vision
Recommended system
Reinforcement learning
Migration learning`,
    time: Date.UTC(2021),
  },
  {
    id: "34rtdsayui87",
    author: {
      name: "Joo Faker",
      profilePicture:
        "http://www.leitner-hof.com/files/layout/fullpage/examples/imgs/bg1.jpg",
      followers: 200,
    },
    img: "http://www.leitner-hof.com/files/layout/fullpage/examples/imgs/bg4.jpg",
    title:
      "this is just one post not a lorem text it's about machine learning 2",
    content: `machine learning, there is a theorem called “no free lunch.” In short, it states that no single algorithm works for all problems, especially in supervised learning (ie, predictive modeling).
For example, you can’t say that neural networks are always better than decision trees, and vice versa. There are many factors at work, such as the size and structure of the data set.
Therefore, you should experiment with a variety of different algorithms for specific problems and set aside a data “test set” to evaluate performance and select winners.
Of course, the algorithm you try must suit your problem, that is, choose the right machine learning task. For example, if you need to clean the house, you may use a vacuum cleaner, broom or mop, but you won’t take out the shovel and start digging.
Machine learning overview
Machine learning is a branch of artificial intelligence, a science that researches machines to acquire new knowledge and new skills and to identify existing knowledge. The precise definition of machine learning is:
It’s a computer program learning from experience E with respect to some task T and some performance measure P, if its performance on T as measured by P, improves with E : Tom Mitchell 1998
Machine learning has been widely used in data mining, computer vision, natural language processing, biometrics, search engines, medical diagnostics, detection of credit card fraud, securities market analysis, DNA sequence sequencing, speech and handwriting recognition, strategy games and robotics.
Machine learning algorithm

(Image courtesy of blogs.sas.com)
Machine learning algorithm classification
According to the way of learning, machine learning mainly includes:
Supervised learning: Input data is tagged. Supervised learning establishes a learning process, compares the predicted results with the actual results of the “training data” (ie, input data), and continuously adjusts the predictive model until the predicted results of the model reach an expected accuracy, such as classification and regression problems. . Common algorithms include decision trees, Bayesian classification, least squares regression, logistic regression, support vector machines, neural networks, and so on.
Unsupervised learning: Input data has no tags, but algorithms to infer the intrinsic links of data, such as clustering and association rule learning. Common algorithms include independent component analysis, K-Means and Apriori algorithms.
Semi-supervised learning: input data part tags, is an extension of supervised learning, often used for classification and regression. Common algorithms include graph theory inference algorithms, Laplacian support vector machines, and so on.
Reinforcement learning: Input data as feedback to the model, emphasizing how to act based on the environment to maximize the expected benefits. The difference between supervised learning is that it does not require the correct input/output pairs and does not require precise correction of sub-optimal behavior. Reinforcement learning is more focused on online planning and requires a balance between exploration (in the unknown) and compliance (existing knowledge).
According to the function to divide, machine learning, including:
Regression algorithm
Linear regression
Logistic regression
Multiple Adaptive Regression (MARS)
Local scatter smoothing estimate (LOESS)
Instance-based learning algorithm
K — proximity algorithm (kNN)
Learning vectorization (LVQ)
Self-Organizing Mapping Algorithm (SOM)
Local Weighted Learning Algorithm (LWL)
Regularization algorithm
Ridge Regression
LASSO（Least Absolute Shrinkage and Selection Operator）
Elastic Net
Minimum Angle Regression (LARS)
Decision tree algorithm
Classification and Regression Tree (CART)
ID3 algorithm (Iterative Dichotomiser 3)
C4.5 and C5.0
CHAID（Chi-squared Automatic Interaction Detection(）
Random Forest
Multivariate Adaptive Regression Spline (MARS)
Gradient Boosting Machine (GBM)
Bayesian algorithm
Naive Bayes
Gaussian Bayes
Polynomial naive Bayes
AODE（Averaged One-Dependence Estimators）
Bayesian Belief Network
Kernel-based algorithm
Support vector machine (SVM)
Radial Basis Function (RBF)
Linear Discriminate Analysis (LDA)
Clustering Algorithm
K — mean
K — medium number
EM algorithm
Hierarchical clustering
Association rule learning
Apriori algorithm
Eclat algorithm
Neural Networks
sensor
Backpropagation algorithm (BP)
Hopfield network
Radial Basis Function Network (RBFN)
Deep learning
Deep Boltzmann Machine (DBM)
Convolutional Neural Network (CNN)
Recurrent neural network (RNN, LSTM)
Stacked Auto-Encoder
Dimensionality reduction algorithm
Principal Component Analysis (PCA)
Principal component regression (PCR)
Partial least squares regression (PLSR)
Salmon map
Multidimensional scaling analysis (MDS)
Projection pursuit method (PP)
Linear Discriminant Analysis (LDA)
Mixed Discriminant Analysis (MDA)
Quadratic Discriminant Analysis (QDA)
Flexible Discriminant Analysis (FDA)
Integrated algorithm
Boosting
Bagging
AdaBoost
Stack generalization (mixed)
GBM algorithm
GBRT algorithm
Random forest
Other algorithms
Feature selection algorithm
Performance evaluation algorithm
Natural language processing
Computer vision
Recommended system
Reinforcement learning
Migration learning`,
    time: Date.UTC(2022, 3),
  },
  {
    id: "34rtyuidsa87",
    author: {
      name: "Mahmoud Hafez",
      profilePicture:
        "http://www.leitner-hof.com/files/layout/fullpage/examples/imgs/bg1.jpg",
      followers: 200,
    },
    img: "http://www.leitner-hof.com/files/layout/fullpage/examples/imgs/bg4.jpg",
    title:
      "this is just one post not a lorem text it's about machine learning 3",
    content: `machine learning, there is a theorem called “no free lunch.” In short, it states that no single algorithm works for all problems, especially in supervised learning (ie, predictive modeling).
For example, you can’t say that neural networks are always better than decision trees, and vice versa. There are many factors at work, such as the size and structure of the data set.
Therefore, you should experiment with a variety of different algorithms for specific problems and set aside a data “test set” to evaluate performance and select winners.
Of course, the algorithm you try must suit your problem, that is, choose the right machine learning task. For example, if you need to clean the house, you may use a vacuum cleaner, broom or mop, but you won’t take out the shovel and start digging.
Machine learning overview
Machine learning is a branch of artificial intelligence, a science that researches machines to acquire new knowledge and new skills and to identify existing knowledge. The precise definition of machine learning is:
It’s a computer program learning from experience E with respect to some task T and some performance measure P, if its performance on T as measured by P, improves with E : Tom Mitchell 1998
Machine learning has been widely used in data mining, computer vision, natural language processing, biometrics, search engines, medical diagnostics, detection of credit card fraud, securities market analysis, DNA sequence sequencing, speech and handwriting recognition, strategy games and robotics.
Machine learning algorithm

(Image courtesy of blogs.sas.com)
Machine learning algorithm classification
According to the way of learning, machine learning mainly includes:
Supervised learning: Input data is tagged. Supervised learning establishes a learning process, compares the predicted results with the actual results of the “training data” (ie, input data), and continuously adjusts the predictive model until the predicted results of the model reach an expected accuracy, such as classification and regression problems. . Common algorithms include decision trees, Bayesian classification, least squares regression, logistic regression, support vector machines, neural networks, and so on.
Unsupervised learning: Input data has no tags, but algorithms to infer the intrinsic links of data, such as clustering and association rule learning. Common algorithms include independent component analysis, K-Means and Apriori algorithms.
Semi-supervised learning: input data part tags, is an extension of supervised learning, often used for classification and regression. Common algorithms include graph theory inference algorithms, Laplacian support vector machines, and so on.
Reinforcement learning: Input data as feedback to the model, emphasizing how to act based on the environment to maximize the expected benefits. The difference between supervised learning is that it does not require the correct input/output pairs and does not require precise correction of sub-optimal behavior. Reinforcement learning is more focused on online planning and requires a balance between exploration (in the unknown) and compliance (existing knowledge).
According to the function to divide, machine learning, including:
Regression algorithm
Linear regression
Logistic regression
Multiple Adaptive Regression (MARS)
Local scatter smoothing estimate (LOESS)
Instance-based learning algorithm
K — proximity algorithm (kNN)
Learning vectorization (LVQ)
Self-Organizing Mapping Algorithm (SOM)
Local Weighted Learning Algorithm (LWL)
Regularization algorithm
Ridge Regression
LASSO（Least Absolute Shrinkage and Selection Operator）
Elastic Net
Minimum Angle Regression (LARS)
Decision tree algorithm
Classification and Regression Tree (CART)
ID3 algorithm (Iterative Dichotomiser 3)
C4.5 and C5.0
CHAID（Chi-squared Automatic Interaction Detection(）
Random Forest
Multivariate Adaptive Regression Spline (MARS)
Gradient Boosting Machine (GBM)
Bayesian algorithm
Naive Bayes
Gaussian Bayes
Polynomial naive Bayes
AODE（Averaged One-Dependence Estimators）
Bayesian Belief Network
Kernel-based algorithm
Support vector machine (SVM)
Radial Basis Function (RBF)
Linear Discriminate Analysis (LDA)
Clustering Algorithm
K — mean
K — medium number
EM algorithm
Hierarchical clustering
Association rule learning
Apriori algorithm
Eclat algorithm
Neural Networks
sensor
Backpropagation algorithm (BP)
Hopfield network
Radial Basis Function Network (RBFN)
Deep learning
Deep Boltzmann Machine (DBM)
Convolutional Neural Network (CNN)
Recurrent neural network (RNN, LSTM)
Stacked Auto-Encoder
Dimensionality reduction algorithm
Principal Component Analysis (PCA)
Principal component regression (PCR)
Partial least squares regression (PLSR)
Salmon map
Multidimensional scaling analysis (MDS)
Projection pursuit method (PP)
Linear Discriminant Analysis (LDA)
Mixed Discriminant Analysis (MDA)
Quadratic Discriminant Analysis (QDA)
Flexible Discriminant Analysis (FDA)
Integrated algorithm
Boosting
Bagging
AdaBoost
Stack generalization (mixed)
GBM algorithm
GBRT algorithm
Random forest
Other algorithms
Feature selection algorithm
Performance evaluation algorithm
Natural language processing
Computer vision
Recommended system
Reinforcement learning
Migration learning`,
    time: Date.UTC(2022, 4, 1),
  },
  {
    id: "34rtyui8fas7",
    author: {
      name: "Mahmoud Mohsen",
      profilePicture:
        "http://www.leitner-hof.com/files/layout/fullpage/examples/imgs/bg1.jpg",
      followers: 200,
    },
    img: "http://www.leitner-hof.com/files/layout/fullpage/examples/imgs/bg4.jpg",
    title:
      "this is just one post not a lorem text it's about machine learning 4",
    content: `machine learning, there is a theorem called “no free lunch.” In short, it states that no single algorithm works for all problems, especially in supervised learning (ie, predictive modeling).
For example, you can’t say that neural networks are always better than decision trees, and vice versa. There are many factors at work, such as the size and structure of the data set.
Therefore, you should experiment with a variety of different algorithms for specific problems and set aside a data “test set” to evaluate performance and select winners.
Of course, the algorithm you try must suit your problem, that is, choose the right machine learning task. For example, if you need to clean the house, you may use a vacuum cleaner, broom or mop, but you won’t take out the shovel and start digging.
Machine learning overview
Machine learning is a branch of artificial intelligence, a science that researches machines to acquire new knowledge and new skills and to identify existing knowledge. The precise definition of machine learning is:
It’s a computer program learning from experience E with respect to some task T and some performance measure P, if its performance on T as measured by P, improves with E : Tom Mitchell 1998
Machine learning has been widely used in data mining, computer vision, natural language processing, biometrics, search engines, medical diagnostics, detection of credit card fraud, securities market analysis, DNA sequence sequencing, speech and handwriting recognition, strategy games and robotics.
Machine learning algorithm

(Image courtesy of blogs.sas.com)
Machine learning algorithm classification
According to the way of learning, machine learning mainly includes:
Supervised learning: Input data is tagged. Supervised learning establishes a learning process, compares the predicted results with the actual results of the “training data” (ie, input data), and continuously adjusts the predictive model until the predicted results of the model reach an expected accuracy, such as classification and regression problems. . Common algorithms include decision trees, Bayesian classification, least squares regression, logistic regression, support vector machines, neural networks, and so on.
Unsupervised learning: Input data has no tags, but algorithms to infer the intrinsic links of data, such as clustering and association rule learning. Common algorithms include independent component analysis, K-Means and Apriori algorithms.
Semi-supervised learning: input data part tags, is an extension of supervised learning, often used for classification and regression. Common algorithms include graph theory inference algorithms, Laplacian support vector machines, and so on.
Reinforcement learning: Input data as feedback to the model, emphasizing how to act based on the environment to maximize the expected benefits. The difference between supervised learning is that it does not require the correct input/output pairs and does not require precise correction of sub-optimal behavior. Reinforcement learning is more focused on online planning and requires a balance between exploration (in the unknown) and compliance (existing knowledge).
According to the function to divide, machine learning, including:
Regression algorithm
Linear regression
Logistic regression
Multiple Adaptive Regression (MARS)
Local scatter smoothing estimate (LOESS)
Instance-based learning algorithm
K — proximity algorithm (kNN)
Learning vectorization (LVQ)
Self-Organizing Mapping Algorithm (SOM)
Local Weighted Learning Algorithm (LWL)
Regularization algorithm
Ridge Regression
LASSO（Least Absolute Shrinkage and Selection Operator）
Elastic Net
Minimum Angle Regression (LARS)
Decision tree algorithm
Classification and Regression Tree (CART)
ID3 algorithm (Iterative Dichotomiser 3)
C4.5 and C5.0
CHAID（Chi-squared Automatic Interaction Detection(）
Random Forest
Multivariate Adaptive Regression Spline (MARS)
Gradient Boosting Machine (GBM)
Bayesian algorithm
Naive Bayes
Gaussian Bayes
Polynomial naive Bayes
AODE（Averaged One-Dependence Estimators）
Bayesian Belief Network
Kernel-based algorithm
Support vector machine (SVM)
Radial Basis Function (RBF)
Linear Discriminate Analysis (LDA)
Clustering Algorithm
K — mean
K — medium number
EM algorithm
Hierarchical clustering
Association rule learning
Apriori algorithm
Eclat algorithm
Neural Networks
sensor
Backpropagation algorithm (BP)
Hopfield network
Radial Basis Function Network (RBFN)
Deep learning
Deep Boltzmann Machine (DBM)
Convolutional Neural Network (CNN)
Recurrent neural network (RNN, LSTM)
Stacked Auto-Encoder
Dimensionality reduction algorithm
Principal Component Analysis (PCA)
Principal component regression (PCR)
Partial least squares regression (PLSR)
Salmon map
Multidimensional scaling analysis (MDS)
Projection pursuit method (PP)
Linear Discriminant Analysis (LDA)
Mixed Discriminant Analysis (MDA)
Quadratic Discriminant Analysis (QDA)
Flexible Discriminant Analysis (FDA)
Integrated algorithm
Boosting
Bagging
AdaBoost
Stack generalization (mixed)
GBM algorithm
GBRT algorithm
Random forest
Other algorithms
Feature selection algorithm
Performance evaluation algorithm
Natural language processing
Computer vision
Recommended system
Reinforcement learning
Migration learning`,
    time: Date.now(),
  },
  {
    id: "34rtyui8ewf7",
    author: {
      name: "Joo 4afeek",
      profilePicture:
        "http://www.leitner-hof.com/files/layout/fullpage/examples/imgs/bg1.jpg",
      followers: 200,
    },
    img: "http://www.leitner-hof.com/files/layout/fullpage/examples/imgs/bg4.jpg",
    title:
      "this is just one post not a lorem text it's about machine learning 5",
    content: `machine learning, there is a theorem called “no free lunch.” In short, it states that no single algorithm works for all problems, especially in supervised learning (ie, predictive modeling).
For example, you can’t say that neural networks are always better than decision trees, and vice versa. There are many factors at work, such as the size and structure of the data set.
Therefore, you should experiment with a variety of different algorithms for specific problems and set aside a data “test set” to evaluate performance and select winners.
Of course, the algorithm you try must suit your problem, that is, choose the right machine learning task. For example, if you need to clean the house, you may use a vacuum cleaner, broom or mop, but you won’t take out the shovel and start digging.
Machine learning overview
Machine learning is a branch of artificial intelligence, a science that researches machines to acquire new knowledge and new skills and to identify existing knowledge. The precise definition of machine learning is:
It’s a computer program learning from experience E with respect to some task T and some performance measure P, if its performance on T as measured by P, improves with E : Tom Mitchell 1998
Machine learning has been widely used in data mining, computer vision, natural language processing, biometrics, search engines, medical diagnostics, detection of credit card fraud, securities market analysis, DNA sequence sequencing, speech and handwriting recognition, strategy games and robotics.
Machine learning algorithm

(Image courtesy of blogs.sas.com)
Machine learning algorithm classification
According to the way of learning, machine learning mainly includes:
Supervised learning: Input data is tagged. Supervised learning establishes a learning process, compares the predicted results with the actual results of the “training data” (ie, input data), and continuously adjusts the predictive model until the predicted results of the model reach an expected accuracy, such as classification and regression problems. . Common algorithms include decision trees, Bayesian classification, least squares regression, logistic regression, support vector machines, neural networks, and so on.
Unsupervised learning: Input data has no tags, but algorithms to infer the intrinsic links of data, such as clustering and association rule learning. Common algorithms include independent component analysis, K-Means and Apriori algorithms.
Semi-supervised learning: input data part tags, is an extension of supervised learning, often used for classification and regression. Common algorithms include graph theory inference algorithms, Laplacian support vector machines, and so on.
Reinforcement learning: Input data as feedback to the model, emphasizing how to act based on the environment to maximize the expected benefits. The difference between supervised learning is that it does not require the correct input/output pairs and does not require precise correction of sub-optimal behavior. Reinforcement learning is more focused on online planning and requires a balance between exploration (in the unknown) and compliance (existing knowledge).
According to the function to divide, machine learning, including:
Regression algorithm
Linear regression
Logistic regression
Multiple Adaptive Regression (MARS)
Local scatter smoothing estimate (LOESS)
Instance-based learning algorithm
K — proximity algorithm (kNN)
Learning vectorization (LVQ)
Self-Organizing Mapping Algorithm (SOM)
Local Weighted Learning Algorithm (LWL)
Regularization algorithm
Ridge Regression
LASSO（Least Absolute Shrinkage and Selection Operator）
Elastic Net
Minimum Angle Regression (LARS)
Decision tree algorithm
Classification and Regression Tree (CART)
ID3 algorithm (Iterative Dichotomiser 3)
C4.5 and C5.0
CHAID（Chi-squared Automatic Interaction Detection(）
Random Forest
Multivariate Adaptive Regression Spline (MARS)
Gradient Boosting Machine (GBM)
Bayesian algorithm
Naive Bayes
Gaussian Bayes
Polynomial naive Bayes
AODE（Averaged One-Dependence Estimators）
Bayesian Belief Network
Kernel-based algorithm
Support vector machine (SVM)
Radial Basis Function (RBF)
Linear Discriminate Analysis (LDA)
Clustering Algorithm
K — mean
K — medium number
EM algorithm
Hierarchical clustering
Association rule learning
Apriori algorithm
Eclat algorithm
Neural Networks
sensor
Backpropagation algorithm (BP)
Hopfield network
Radial Basis Function Network (RBFN)
Deep learning
Deep Boltzmann Machine (DBM)
Convolutional Neural Network (CNN)
Recurrent neural network (RNN, LSTM)
Stacked Auto-Encoder
Dimensionality reduction algorithm
Principal Component Analysis (PCA)
Principal component regression (PCR)
Partial least squares regression (PLSR)
Salmon map
Multidimensional scaling analysis (MDS)
Projection pursuit method (PP)
Linear Discriminant Analysis (LDA)
Mixed Discriminant Analysis (MDA)
Quadratic Discriminant Analysis (QDA)
Flexible Discriminant Analysis (FDA)
Integrated algorithm
Boosting
Bagging
AdaBoost
Stack generalization (mixed)
GBM algorithm
GBRT algorithm
Random forest
Other algorithms
Feature selection algorithm
Performance evaluation algorithm
Natural language processing
Computer vision
Recommended system
Reinforcement learning
Migration learning`,
    time: Date.UTC(2020, 6),
  },
];

const renderActive = () => {
  while (main_content.firstChild)
    main_content.removeChild(main_content.firstChild);
  const search = window.location.search;
  if (search) {
    const postTitle = unescape(
      search.split("article=")[1].split("-").join(" ")
    );
    const post = posts.find((p) => p.title === postTitle);
    const { id, title, time, author, content, img } = post;
    main_content.appendChild(
      renderOnePost(id, title, time, author, content, img)
    );
  } else {
    const data = posts;
    data.forEach(({ id, title, time, author, content, img }) => {
      main_content.appendChild(
        createDraft(id, title, time, author, content, img)
      );
    });
  }
};

// options.forEach((option) => {
//   option.addEventListener("click", (e) => {
//     options.forEach((o) => o.classList.remove("active"));
//     // const data = await get_data(option.id)
//     renderActive(option.id);
//   });
// });

renderActive();
