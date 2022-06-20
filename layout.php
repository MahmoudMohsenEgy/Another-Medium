<?php
include 'logic/connect.php';
class post{
   public $id ;
   public $title ;
   public $content;
   public $date;
   public $authorId;
   public $img;
}
$stmt = "SELECT * FROM posts
        ORDER BY RAND()  LIMIT 2";

$postsArray = mysqli_query($conn,$stmt);
//$count = mysqli_num_rows($userFound);
$result = array();

    while($row = mysqli_fetch_array($postsArray)){
        //echo $row['title'] . "<br>";
        $post = new Post();
        $post->id =$row['id'];
        $post->title =$row['title'];
        $post->content =$row['content'];
        $post->date =$row['date'];
        $post->authorId =$row['authorId'];
        $post->img = $row['img'];
        array_push($result, $post);

  

    }
    
    
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/x-icon" href="assets/LeftNavBar/icons/favicon_2.svg">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">

    <!-- Change this to your page name-->

    <title>Change This to your page name</title>

    <!--################################-->
    <link rel="stylesheet" href="style/layout_style.css">
</head>
<body>
    <div class="container-lg">    
        <div class="roww">
            <div class="column left">
                <a href="index.php" >
                    <img style="cursor: pointer; margin-top: 20px; margin-right: 8px;" src="./assets/LeftNavBar/icons/MediumPlus.svg" alt="medium plus" />
                </a>
                <ul class="nav flex-column justify-content-center" style="height: 100%; margin:auto">
                        <li class="nav-item">
                            <a href="layout.php">
                                <img  class="leftAssets nav-link" src="assets/LeftNavBar/home.svg" alt="Home Page" >
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="notificationPage.php">
                                <img class="leftAssets nav-link" src="assets/LeftNavBar/bell_off.svg" alt="Notifications">
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="lists-page.php">
                                <img class="leftAssets nav-link" src="assets/LeftNavBar/bookmark.svg" alt="Saved Articles">
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="storiesPage.php">
                                <img class="leftAssets nav-link" src="assets/LeftNavBar/icons/stories-icon.svg" alt="stories" style="width:60px ;">
                            </a>
                        </li>
                        <li class="nav-item" id="left-hr">
                            <div >
                                <hr style="height: 1px;">
                            </div>
                        </li>
                        <li class="nav-item">
                            <a href="createNewStory.php">
                                <img class="leftAssets nav-link" src="assets/LeftNavBar/write.svg" alt="Write Articles" >
                            </a>
                        </li>
                </ul>
            </div>
            
            <div class="center column">
               
                <div id="allcontent">
                    <div style="display: flex;">
                        <img   src="assets/RightBar/joseph.jpg" alt="userphoto" class="rounded-circle" style="width: 150px;height:150px">
                        <div style="display: flex; flex-direction: column; margin-left: 30px;">
                            <p ><b class="authorName">Mahmoud Mohsen</b></p>
                            <small id="date">April 17,2022</small>
                            <small id="readingMins">11 mins read</small>
                        </div>
                        
                        
                    </div>
                    <Strong style="font-size:2rem;">Introduction to Machine Learning algorithms using Python</Strong>
                    <br>
                <pre id="maincontent" class="container">
                
machine learning, there is a theorem called “no free lunch.” In short, it states that no single algorithm works for all problems, especially in supervised learning (ie, predictive modeling).
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
Migration learning
Top 10 Algorithms of Machine Learning Explained
1. Linear Regression: For statistical technique linear regression is used in which value of dependent variable is predicted through independent variables. A relationship is formed by mapping the dependent and independent variable on a line and that line is called regression line which is represented by Y= a*X + b.
Where Y= Dependent variable (e.g weight).
X= Independent Variable (e.g height)
b= Intercept and a = slope.
2. Logistic Regression: In logistic regression we have lot of data whose classification is done by building an equation. This method is used to find the discrete dependent variable from the set of independent variables. Its goal is to find the best fit set of parameters. In this classifier, each feature is multiplied by a weight and then all are added. Then the result is passed to sigmoid function which produces the binary output. Logistic regression generates the coefficients to predict a logit transformation of the probability.
3. Decision Tree: It belongs to supervised learning algorithm. Decision tree can be used to classification and regression both having a tree like structure. In a decision tree building algorithm first the best attribute of dataset is placed at the root, then training dataset is split into subsets. Splitting of data depends on the features of datasets. This process is done until the whole data is classified and we find leaf node at each branch. Information gain can be calculated to find which feature is giving us the highest information gain. Decision trees are built for making a training model which can be used to predict class or the value of target variable.
4. Support vector machine: Support vector machine is a binary classifier. Raw data is drawn on the n- dimensional plane. In this a separating hyperplane is drawn to differentiate the datasets. The line drawn from centre of the line separating the two closest data-points of different categories is taken as an optimal hyperplane. This optimised separating hyperplane maximizes the margin of training data. Through this hyperplane, new data can be categorised.
5. Naive-Bayes: It is a technique for constructing classifiers which is based on Bayes theorem used even for highly sophisticated classification methods. It learns the probability of an object with certain features belonging to a particular group or class. In short, it is a probabilistic classifier. In this method occurrence of each feature is independent of occurrence another feature. It only needs small amount of training data for classification, and all terms can be precomputed thus classifying becomes easy, quick and efficient.
6. KNN: This method is used for both classification and regression. It is among the simplest method of machine learning algorithms. It stores the cases and for new data it checks the majority of the k neighbours with which it resembles the most. KNN makes predictions using the training dataset directly.
7. K-means Clustering: It is an unsupervised learning algorithm used to overcome the limitation of clustering. To group the datasets into clusters initial partition is done using Euclidean distance. Assume if we have k clusters, for each cluster a centre is defined. These centres should be far from each other, and then each point is examined thus added to the belonging nearest cluster in terms of Euclidean distance to nearest mean, until no point remains pending. A mean vector is re-calculated for each new entry. The iterative relocation is done until proper clustering is done. Thus for minimizing the objective squared error function process is repeated by generating a loop.
Final results of the K-means clustering algorithm are:
1. The centroids of the K clusters, which are used to label new entered data.
2. Labels for the training data .
8. Random Forest: It is a supervised classification algorithm. Multiple number of decision trees taken together forms a random forest algorithm i.e the collection of many classification tree. It can be used for classification as well as regression. Each decision tree includes some rule based system. For the given training dataset with targets and features, the decision tree algorithm will have set of rules. In random forest unlike decision trees there is no need to calculate information gain to find root node. It use the rules of each randomly created decision tree to predict the outcome and stores the predicted outcome. Further it calculates the vote for each predicted target. Thus high voted prediction is considered as the final prediction from the random forest algorithm.
9. Dimensionality Reduction Algorithms: It is used to reduce the number of random variables by obtaining some principal variables. Feature extraction and feature selection are types of dimensionality reduction method. It can be done by PCA, Principal component analysis is a method of extracting important variables from large set of variables. It extracts the low dimensionality set of features from high dimensional data. It is used basically when we have more than 3 dimensional data.
10. Gradient boosting and Ada Boost Algorithms : Gradient boosting algorithm is a regression and classification algorithm. AdaBoost only selects those features which improves predictive power of the model. It works by choosing a base algorithm like decision trees and iteratively improving it by accounting for the incorrectly classified examples in the training set. Both of algorithms are used for the boosting of the accuracy of predictive model.
References:
https://towardsdatascience.com/a-tour-of-the-top-10-algorithms-for-machine-learning-newbies-dde4edffae11
https://machinelearningmastery.com/start-here/#algorithms
613

                
                </pre>

                </div>

            </div>
            <div class="right column">
                
                <div class="rightBlock" style="margin-left: 5px;padding:1em">
                    <div class="row">
                    <div class="col-8 text-center" >
                    <a href="signup.php" role="button" class="btn btn-dark rndBtn text-center" style="margin-top: 20px; width: 100%; " id="getstartedbutton" >Get started</a>
                    </div>
                    <div class="col">
                        <a href="signin.php" role="button" class="btn rndBtn" style="margin-top: 20px; color: #0d9c08;" id="signinbutton" >Sign in</a>
                    </div>
                </div>
                                        
                    
                    <div class="usr_info_placeholder" onclick="" style="margin-top: 50px;">
                        <img id="authorImage" style="height: 80%; width: 30%; " src="assets/RightBar/usr_img.jpg" class=" rounded-circle " alt="follow">
                        <div id="rightpublisher" class="container">
                            <Strong class="authorName">Mahmoud Mohsen</Strong>
                            <br>
                            <small id="numFollowers">52K followers</small>
                            <br>
                            <button type="button" class="btn btn-outline-success rndBtn">Follow</button>
                            <br>
                            
                        </div>
                        
                    </div>
                    
                    <div style="height: auto; margin-left: 5px; ">
                        <hr style="opacity: 1; width: 100%;">
                        <strong style="margin-top: 10px; margin-bottom: 10px;">More posts</strong>
                        <div style="position:absolute; bottom:0; margin-left: auto; margin-right: auto;"></div>
                        <div id="postsPreview">
                            <div class="post_demo_placeholder shadow bg-white rounded p-2" >
                                
                                <div style="width: 100%; display: flex; flex-direction: column;" >
                                    <div style="width:70%; align-items: center;">
                                        <img   class="userphoto" src="assets/RightBar/joseph.jpg" alt="user photo" style="margin: 2px">
                                        <small style="margin: 6px">Joseph fakher</small>
                                    </div>
                                    <strong style="width:auto; font-size:medium;">Lifehack: How to finish CEH in 1 hour. </strong>
                                    
                                </div>
                                <img style="width: 30%;height: 50%; padding: 5px;" class="thumbnail" src="assets/RightBar/oscp-vs-ceh.jpg" alt="post img">
                                
                            </div>
                        </div>

                    

                        
                        
                        

                    </div>
                    
                        <div style="display: flex; height: 100%; justify-content: center; " >
                            <br>
                            
                            <a class="helperlinks" href="about.php">About</a>
                            <a class="helperlinks" href="">FAQ</a>
                            <a class="helperlinks" href="">Privacy</a>
                            <a class="helperlinks" href="">Terms</a>
                        </div>
                    </div>


            </div>

            </div>
        </div>
    </div>

<script src="./jsstoriesPage.js"></script>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script src="./js/post-page.js"></script>
<script>
   
    
  
  



    console.log(" posts->");
    var posts = new Array();
    var posts = <?php echo json_encode($result); ?>;
    
    console.log(posts);
    for (let i=0 ; i < posts.length ; i++){
createPostPreview({
    postImgSrc:posts[i]['img'],
    authImgSource:"assets/RightBar/joseph.jpg",
    authName: "Joseph Fakher",
    title: [posts[i]["title"]]

});

    }
</script>
</body>
</html>