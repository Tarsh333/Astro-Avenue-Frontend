const data=[
    {
        text:'Asteroid belts are regions in the solar system that contain a large number of small celestial bodies called asteroids. These asteroids orbit the sun and can range in size from tiny rocks to large boulders. Detecting and categorizing these asteroids is an important task in astronomy, as it helps us better understand the composition and evolution of our solar system. One technique for detecting asteroid belts in a dataset of celestial bodies is to use clustering algorithms such as DBSCAN (Density-Based Spatial Clustering of Applications with Noise). DBSCAN is a popular clustering algorithm used in data mining and machine learning to group together data points that are closely related to one another based on their spatial proximity.',
        title:'Asteroid Belt Detection',
        image:'https://upload.wikimedia.org/wikipedia/commons/f/f3/InnerSolarSystem-en.png',
        link:'/asteroid.html'
    },
    {
        text:'KMeans is a popular unsupervised machine learning algorithm used for clustering data. The goal of KMeans is to divide a given set of data points into K clusters, where K is a user-defined parameter. The algorithm starts by randomly assigning K centroids (cluster centers) to the data points. It then iteratively adjusts the centroids and reassigns the data points to the nearest centroid, until the cluster assignments stabilize.',
        title:'Kmeans ',
        image:'https://cdn.hashnode.com/res/hashnode/image/upload/v1626898894749/nJ1KWbhvk.png',
        link1:'/cluster/ds1/kmeans.html',
        link2:'/cluster/ds2/kmeans.html',
        link3:'/cluster/ds3/kmeans.html',

    },
    {
        text:'KMeans++ is a variation of the original KMeans algorithm, designed to select better initial centroids for the clusters.The algorithm starts by randomly selecting the first centroid from the data points. It then selects each subsequent centroid by choosing a data point that is farthest from the already chosen centroids. This process continues until K centroids have been selected',
        title:'Kmeans Plus Plus',
        image:'http://localhost:8000/kmeansPP.png',
        link1:'/cluster/ds1/kmeansPP.html',
        link2:'/cluster/ds2/kmeansPP.html',
        link3:'/cluster/ds3/kmeansPP.html',
    },
    {
        text:'Bisecting KMeans is a clustering algorithm that is a variation of the standard KMeans algorithm. The algorithm starts by assigning all data points to a single cluster. Then, it repeatedly bisects the cluster with the highest sum of squared distances to its centroid, creating two new clusters from the resulting split. This process continues until a desired number of clusters is reached or until some stopping criteria is met',
        title:'Bisecting Kmeans ',
        image:'http://localhost:8000/bisecting.png',
        link1:'/cluster/ds1/bisecting.html',
        link2:'/cluster/ds2/bisecting.html',
        link3:'/cluster/ds3/bisecting.html',
    },
    {
        text:'Hierarchical clustering is a type of unsupervised machine learning algorithm used for grouping similar data points together into clusters. In the max-linkage method of hierarchical clustering, also known as complete linkage, the distance between two clusters is calculated as the maximum distance between any two data points in the two clusters. The algorithm starts by assigning each data point to its own cluster. It then iteratively merges the two clusters that are farthest apart, based on the maximum distance between their data points. ',
        title:'Hierarchical (Max Linkage)',
        image:'http://localhost:8000//maxLinkage.png',
        link1:'/cluster/ds1/maxLinkage.html',
        link2:'/cluster/ds2/maxLinkage.html',
        link3:'/cluster/ds3/maxLinkage.html',
    },
]
export default data